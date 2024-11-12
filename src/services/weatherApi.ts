import axios from 'axios';

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: OPENWEATHER_API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

export const getForecast = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: OPENWEATHER_API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch forecast data');
  }
};