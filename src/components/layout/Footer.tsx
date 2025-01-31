import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">HealthCare</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing quality healthcare services for over 20 years. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500"><Linkedin /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-500">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-500">Our Services</Link></li>
              <li><Link to="/doctors" className="text-gray-400 hover:text-blue-500">Our Doctors</Link></li>
              <li><Link to="/appointment" className="text-gray-400 hover:text-blue-500">Book Appointment</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-blue-500">Latest News</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-blue-500">Primary Care</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-500">Emergency Care</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-500">Diagnostics</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-500">Mental Health</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-500">Preventive Care</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="text-blue-500" />
                <span className="text-gray-400">123 Healthcare Ave, Medical City, MC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-500" />
                <span className="text-gray-400">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-500" />
                <span className="text-gray-400">contact@healthcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} HealthCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};