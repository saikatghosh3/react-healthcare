import React from 'react';
import { DiagnosticServicesSlider } from './DiagnosticServicesSlider';
import { diagnosticsData } from '../data/diagnosticsData';

export const DiagnosticServices = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Diagnostic Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive diagnostic packages and health screenings for preventive care and early detection.
            Explore our range of specialized health check-up packages.
          </p>
        </div>
        
        <DiagnosticServicesSlider services={diagnosticsData} />
      </div>
    </section>
  );
};