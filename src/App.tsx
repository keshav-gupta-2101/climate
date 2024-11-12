import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WeatherHero from './components/WeatherHero';
import WeatherMap from './components/WeatherMap';
import WeatherCharts from './components/WeatherCharts';
import WeatherAlerts from './components/WeatherAlerts';
import Forecast from './components/Forecast';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SOSButton from './components/SOS/SOSButton';
import AuthModal from './components/Auth/AuthModal';
import { useAuth } from './context/AuthContext';

function App() {
  const { user } = useAuth();
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onLoginClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
        onSignUpClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
        isLoggedIn={!!user}
      />
      <main>
        <WeatherHero />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-center mb-12">
            <SearchBar />
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Interactive Weather Map</h2>
            <WeatherMap />
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Weather Trends</h2>
            <WeatherCharts />
          </div>
        </div>
        <WeatherAlerts />
        <Forecast />
        <NewsletterSubscribe />
      </main>
      <Footer />
      <SOSButton />
      <AuthModal 
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        onSwitchMode={() => setAuthModal({ 
          ...authModal, 
          mode: authModal.mode === 'login' ? 'signup' : 'login' 
        })}
      />
    </div>
  );
}

export default App;