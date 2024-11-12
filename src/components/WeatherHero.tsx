import React from 'react';
import { Cloud, Droplets, Wind, ThermometerSun } from 'lucide-react';

const WeatherHero = () => {
  return (
    <div className="relative h-[500px] bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="absolute inset-0">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="w-full">
            <div className="text-white mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Weather in India</h1>
              <p className="text-xl opacity-90">Real-time updates and forecasts for cities across India</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { city: 'Mumbai', temp: '32°C', icon: <ThermometerSun className="h-8 w-8" />, condition: 'Sunny' },
                { city: 'Delhi', temp: '28°C', icon: <Cloud className="h-8 w-8" />, condition: 'Cloudy' },
                { city: 'Bangalore', temp: '24°C', icon: <Droplets className="h-8 w-8" />, condition: 'Light Rain' },
                { city: 'Chennai', temp: '30°C', icon: <Wind className="h-8 w-8" />, condition: 'Windy' }
              ].map((city, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{city.city}</h3>
                    {city.icon}
                  </div>
                  <div className="text-white">
                    <p className="text-3xl font-bold mb-2">{city.temp}</p>
                    <p className="opacity-75">{city.condition}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHero;