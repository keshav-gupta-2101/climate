import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import './index.css';
import { WeatherProvider } from './context/WeatherContext';
import { AuthProvider } from './context/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <WeatherProvider>
        <App />
        <Toaster position="top-right" />
      </WeatherProvider>
    </AuthProvider>
  </StrictMode>
);