export interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  lat: number;
  lon: number;
}

export interface ForecastData extends WeatherData {
  date: string;
  high: number;
  low: number;
  precipitation: number;
}

export interface WeatherAlert {
  type: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
  region: string;
  timestamp: string;
}

export interface WeatherMapLayer {
  name: string;
  url: string;
  opacity: number;
}