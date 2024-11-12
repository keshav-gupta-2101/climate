import React from 'react';
import { Clock } from 'lucide-react';

const NewsHero = () => {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80')`
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-end pb-16">
          <div className="text-white space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-orange-500 px-3 py-1 text-sm font-semibold rounded-full">Breaking</span>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              India's Economic Growth Surges to Record High in Latest Quarter
            </h1>
            <p className="text-lg md:text-xl max-w-3xl">
              The country's GDP growth exceeded expectations, marking a significant milestone in post-pandemic recovery and establishing India as one of the fastest-growing major economies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;