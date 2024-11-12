import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { sendSOS } from '../../services/notifications';
import { useWeather } from '../../context/WeatherContext';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const SOSButton = () => {
  const { weatherData, currentCity } = useWeather();
  const { user } = useAuth();

  const handleSOS = async () => {
    if (!user) {
      toast.error('Please login to use the SOS feature');
      return;
    }

    try {
      const message = `⚠️ SOS Alert: Severe weather conditions reported in ${currentCity}. Temperature: ${weatherData?.temperature}°C, Condition: ${weatherData?.condition}. Please take necessary precautions.`;
      await sendSOS(message);
      toast.success('SOS alert sent successfully!');
    } catch (error) {
      toast.error('Failed to send SOS alert');
    }
  };

  return (
    <button
      onClick={handleSOS}
      className="fixed bottom-8 right-8 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
    >
      <AlertTriangle className="h-6 w-6" />
      <span>SOS</span>
    </button>
  );
};

export default SOSButton;