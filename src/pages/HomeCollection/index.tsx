import React from 'react';
import { Truck, Clock, Shield, Phone } from 'lucide-react';

export const HomeCollection = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Home Sample Collection</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=2000" 
              alt="Home sample collection"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Convenient Sample Collection at Your Doorstep</h2>
            <p className="text-gray-600">
              Skip the queue and get your medical tests done from the comfort of your home. Our trained phlebotomists ensure safe and hygienic sample collection.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Flexible Timing</h3>
                  <p className="text-gray-600">Choose your preferred time slot</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Safety Assured</h3>
                  <p className="text-gray-600">Trained professionals following strict safety protocols</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Easy Booking</h3>
                  <p className="text-gray-600">Book through phone or online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};