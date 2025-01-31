import React from 'react';
import { Phone, Ambulance, Clock, MapPin, AlertTriangle } from 'lucide-react';

export const Emergency = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <AlertTriangle className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Emergency Services</h1>
                <p>24/7 Emergency Care Available</p>
              </div>
            </div>
            <a
              href="tel:911"
              className="bg-white text-red-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-red-50 flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call 911</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Emergency Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Ambulance className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ambulance Service</h3>
            <p className="text-gray-600">
              Rapid emergency medical transportation with trained paramedics available 24/7.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Emergency Care</h3>
            <p className="text-gray-600">
              Round-the-clock emergency medical services with immediate response.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiple Locations</h3>
            <p className="text-gray-600">
              Emergency care centers strategically located for quick access.
            </p>
          </div>
        </div>

        {/* Emergency Guidelines */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Emergency Guidelines</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-2 rounded-full">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold">When to Call 911</h3>
                <ul className="list-disc pl-5 text-gray-600 mt-2">
                  <li>Chest pain or difficulty breathing</li>
                  <li>Severe injuries or bleeding</li>
                  <li>Loss of consciousness</li>
                  <li>Stroke symptoms</li>
                  <li>Severe allergic reactions</li>
                </ul>
              </div>
            </div>

            <div className="border-t pt-4 mt-4">
              <h3 className="font-semibold mb-2">What to Do While Waiting for Help</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Stay calm and reassure the patient</li>
                <li>Clear the area around the patient</li>
                <li>Gather patient's medications if possible</li>
                <li>Have someone wait outside to guide emergency responders</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};