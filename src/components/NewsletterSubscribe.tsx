import React from 'react';
import { Mail } from 'lucide-react';

const NewsletterSubscribe = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with IndiaToday</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest news from across India. Get daily updates directly in your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;