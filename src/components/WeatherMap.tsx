import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay } from 'react-leaflet';
import { Icon, latLngBounds } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useWeather } from '../context/WeatherContext';

const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

// Default coordinates for India
const DEFAULT_CENTER = [20.5937, 78.9629];
const DEFAULT_ZOOM = 5;

const WeatherMap = () => {
  const { weatherData } = useWeather();
  const [weatherLayer, setWeatherLayer] = useState('');

  useEffect(() => {
    const fetchWeatherLayer = async () => {
      try {
        const response = await fetch(
          `https://tile.openweathermap.org/map/temp_new/0/0/0.png?appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
        );
        setWeatherLayer(response.url);
      } catch (error) {
        console.error('Failed to fetch weather layer:', error);
      }
    };
    fetchWeatherLayer();
  }, []);

  const bounds = latLngBounds([8.4, 68.7], [37.6, 97.25]); // India bounds

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        style={{ height: '100%', width: '100%' }}
        maxBounds={bounds}
        minZoom={4}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        
        {weatherLayer && (
          <ImageOverlay
            url={weatherLayer}
            bounds={bounds}
            opacity={0.5}
          />
        )}

        {weatherData && weatherData.lat && weatherData.lon && (
          <Marker
            position={[weatherData.lat, weatherData.lon]}
            icon={defaultIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg">{weatherData.city}</h3>
                <p className="text-xl">{weatherData.temperature}°C</p>
                <p className="text-gray-600">{weatherData.condition}</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;