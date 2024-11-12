import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { useWeather } from '../context/WeatherContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeatherCharts = () => {
  const { forecast } = useWeather();
  
  const labels = forecast.map(f => 
    new Date(f.date).toLocaleDateString('en-US', { weekday: 'short' })
  );

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const temperatureData = {
    labels,
    datasets: [
      {
        label: 'High Temperature (°C)',
        data: forecast.map(f => f.high),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.3
      },
      {
        label: 'Low Temperature (°C)',
        data: forecast.map(f => f.low),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.3
      }
    ]
  };

  const precipitationData = {
    labels,
    datasets: [
      {
        label: 'Precipitation (%)',
        data: forecast.map(f => f.precipitation),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
      }
    ]
  };

  const windData = {
    labels,
    datasets: [
      {
        label: 'Wind Speed (km/h)',
        data: forecast.map(f => f.windSpeed),
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        borderColor: 'rgb(255, 159, 64)',
      }
    ]
  };

  const humidityData = {
    labels,
    datasets: [
      {
        label: 'Humidity (%)',
        data: forecast.map(f => f.humidity),
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgb(153, 102, 255)',
      }
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Temperature Trend</h3>
        <Line options={chartOptions} data={temperatureData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Precipitation Forecast</h3>
        <Bar options={chartOptions} data={precipitationData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Wind Speed</h3>
        <Line options={chartOptions} data={windData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Humidity Levels</h3>
        <Bar options={chartOptions} data={humidityData} />
      </div>
    </div>
  );
};

export default WeatherCharts;