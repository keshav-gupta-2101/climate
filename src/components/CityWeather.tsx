import React from 'react';
import { Cloud, Droplets, Wind, ThermometerSun, Sunrise, Sunset } from 'lucide-react';

const CityWeather = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* City Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Mumbai</h1>
              <p className="text-xl opacity-90">Maharashtra, India</p>
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold">32°C</div>
              <p className="text-xl">Partly Cloudy</p>
            </div>
          </div>
        </div>

        {/* Weather Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {/* Current Conditions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Current Conditions</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <ThermometerSun className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Feels Like</p>
                  <p className="font-semibold">34°C</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Droplets className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Humidity</p>
                  <p className="font-semibold">65%</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Wind</p>
                  <p className="font-semibold">12 km/h</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Cloud Cover</p>
                  <p className="font-semibold">40%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sun Times */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Sun Times</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sunrise className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-600">Sunrise</span>
                </div>
                <span className="font-semibold">06:15 AM</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sunset className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-600">Sunset</span>
                </div>
                <span className="font-semibold">06:45 PM</span>
              </div>
            </div>
          </div>

          {/* Air Quality */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Air Quality</h2>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-green-800 font-medium">Good</span>
                <span className="text-2xl font-bold text-green-800">45</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="mt-2 text-sm text-green-700">
                Air quality is satisfactory, and air pollution poses little or no risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;