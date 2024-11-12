import React, { useState } from 'react';
import { Menu, X, Search, CloudSun, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onSignUpClick, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <CloudSun className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-2xl font-bold text-gray-800">WeatherIndia</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Current Weather</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Forecast</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Alerts</a>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            {isLoggedIn ? (
              <button
                onClick={handleSignOut}
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                <LogOut className="h-5 w-5 mr-1" />
                Sign Out
              </button>
            ) : (
              <>
                <button
                  onClick={onLoginClick}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Login
                </button>
                <button
                  onClick={onSignUpClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-500">Current Weather</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-500">Forecast</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-500">Alerts</a>
            {isLoggedIn ? (
              <button
                onClick={handleSignOut}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-500"
              >
                Sign Out
              </button>
            ) : (
              <>
                <button
                  onClick={onLoginClick}
                  className="block w-full text-left px-3 py-2 text-blue-500 hover:text-blue-600"
                >
                  Login
                </button>
                <button
                  onClick={onSignUpClick}
                  className="block w-full text-left px-3 py-2 text-blue-500 hover:text-blue-600"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;