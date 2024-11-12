import React from 'react';
import { Cloud, Sun, CloudRain } from 'lucide-react';
import type { ForecastData } from '../types/weather';

const forecast: ForecastData[] = [
  {
    city: 'Mumbai',
    date: '2024-03-20',
    temperature: 32,
    high: 34,
    low: 26,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    precipitation: 20,
    icon: 'cloud'
  },
  {
    city: 'Mumbai',
    date: '2024-03-21',
    temperature: 31,
    high: 33,
    low: 25,
    condition: 'Sunny',
    humidity: 60,
    windSpeed: 10,
    precipitation: 0,
    icon: 'sun'
  },
  {
    city: 'Mumbai',
    date: '2024-03-22',
    temperature: 30,
    high: 32,
    low: 24,
    condition: 'Rain',
    humidity: 75,
    windSpeed: 15,
    precipitation: 60,
    icon: 'rain'
  }
];

const getWeatherIcon = (icon: string) => {
  switch (icon) {
    case 'sun':
      return <Sun className="h-8 w-8 text-yellow-500" />;
    case 'rain':
      return <CloudRain className="h-8 w-8 text-blue-500" />;
    default:
      return <Cloud className="h-8 w-8 text-gray-500" />;
  }
};

const Forecast = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">3-Day Forecast</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {forecast.map((day, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-500">
                    {new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">{day.temperature}°C</p>
                </div>
                {getWeatherIcon(day.icon)}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">High</span>
                  <span className="font-medium text-gray-900">{day.high}°C</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Low</span>
                  <span className="font-medium text-gray-900">{day.low}°C</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Precipitation</span>
                  <span className="font-medium text-gray-900">{day.precipitation}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Wind</span>
                  <span className="font-medium text-gray-900">{day.windSpeed} km/h</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;