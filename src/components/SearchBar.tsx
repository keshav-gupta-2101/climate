import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';

const CITIES = [
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 
  'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat'
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const { setCurrentCity } = useWeather();

  const filteredCities = CITIES.filter(city => 
    city.toLowerCase().includes(query.toLowerCase())
  );

  const handleCitySelect = (city: string) => {
    setQuery(city);
    setShowResults(false);
    setCurrentCity(city);
  };

  return (
    <div className="relative max-w-md w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          placeholder="Search for a city..."
          className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {showResults && query && (
        <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg border max-h-60 overflow-auto z-50">
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <button
                key={city}
                onClick={() => handleCitySelect(city)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
              >
                {city}
              </button>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No cities found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;