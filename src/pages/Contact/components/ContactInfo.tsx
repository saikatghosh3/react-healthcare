import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Address</h3>
            <p className="text-gray-600">123 Healthcare Ave, Medical City, MC 12345</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Phone className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">
              Emergency: <a href="tel:911" className="text-blue-600 hover:underline">911</a>
            </p>
            <p className="text-gray-600">
              Reception: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Email</h3>
            <a href="mailto:contact@healthcare.com" className="text-blue-600 hover:underline">
              contact@healthcare.com
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Working Hours</h3>
            <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Emergency: 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};