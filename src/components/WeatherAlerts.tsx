import React, { useEffect, useState } from 'react';
import { AlertTriangle, Bell } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';
import { sendWeatherAlert } from '../services/notifications';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

interface Alert {
  type: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
  region: string;
  timestamp: string;
}

const WeatherAlerts = () => {
  const { weatherData, forecast } = useWeather();
  const { user } = useAuth();
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    if (weatherData && forecast) {
      const newAlerts: Alert[] = [];

      // Temperature-based alerts
      if (weatherData.temperature > 40) {
        newAlerts.push({
          type: 'Extreme Heat',
          severity: 'high',
          message: `Extreme heat warning: Temperature has reached ${weatherData.temperature}°C`,
          region: weatherData.city,
          timestamp: new Date().toISOString()
        });
      }

      // Rain alerts
      if (forecast.some(f => f.precipitation > 80)) {
        newAlerts.push({
          type: 'Heavy Rain',
          severity: 'medium',
          message: 'Heavy rainfall expected in the next 24 hours',
          region: weatherData.city,
          timestamp: new Date().toISOString()
        });
      }

      // Wind alerts
      if (weatherData.windSpeed > 50) {
        newAlerts.push({
          type: 'Strong Winds',
          severity: 'high',
          message: `Strong winds alert: Wind speed of ${weatherData.windSpeed} km/h detected`,
          region: weatherData.city,
          timestamp: new Date().toISOString()
        });
      }

      setAlerts(newAlerts);

      // Send notifications for high severity alerts only to logged-in users
      if (user) {
        newAlerts
          .filter(alert => alert.severity === 'high')
          .forEach(alert => {
            sendWeatherAlert(
              `Weather Alert: ${alert.type} in ${alert.region} - ${alert.message}`
            );
          });
      }
    }
  }, [weatherData, forecast, user]);

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-blue-700 text-center">
            Please log in to receive weather alerts
          </p>
        </div>
      </div>
    );
  }

  if (alerts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center p-6 bg-green-50 rounded-lg">
          <Bell className="h-6 w-6 text-green-500 mr-2" />
          <p className="text-green-700">No active weather alerts at this time</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center mb-8">
        <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">Active Weather Alerts</h2>
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg border ${
              alert.severity === 'high'
                ? 'bg-red-50 border-red-200'
                : alert.severity === 'medium'
                ? 'bg-orange-50 border-orange-200'
                : 'bg-yellow-50 border-yellow-200'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {alert.type} - {alert.region}
                </h3>
                <p className="text-gray-600">{alert.message}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(alert.timestamp).toLocaleString()}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                alert.severity === 'high'
                  ? 'bg-red-100 text-red-800'
                  : alert.severity === 'medium'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherAlerts;