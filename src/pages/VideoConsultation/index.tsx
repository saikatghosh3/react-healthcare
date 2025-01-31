import React from 'react';
import { Video, Calendar, CreditCard } from 'lucide-react';

export const VideoConsultation = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Video Consultation</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000" 
              alt="Doctor video consultation"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Consult Doctors Online</h2>
            <p className="text-gray-600">
              Get expert medical advice from the comfort of your home through secure video consultations with our experienced doctors.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Video className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">High-Quality Video Calls</h3>
                  <p className="text-gray-600">Crystal clear video and audio quality for effective consultations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Flexible Scheduling</h3>
                  <p className="text-gray-600">Book appointments at your convenience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CreditCard className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Secure Payments</h3>
                  <p className="text-gray-600">Safe and easy payment options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};