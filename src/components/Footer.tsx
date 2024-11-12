import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About Us</h3>
            <p className="text-gray-600">
              IndiaToday brings you the latest news and updates from across India, covering politics, business, technology, sports, and entertainment.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Advertise</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Politics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Business</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Technology</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Sports</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© 2024 IndiaToday. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-orange-500">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-orange-500">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-orange-500">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;