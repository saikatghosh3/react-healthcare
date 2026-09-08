import React from 'react';
import { DiagnosticServicesSlider } from './DiagnosticServicesSlider';
import { SectionHeading } from '../../Home/components/SectionHeading';
import { diagnosticsData } from '../data/diagnosticsData';

export const DiagnosticServices = () => {
  return (
    <section id="packages" className="scroll-mt-32 bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Early Detection"
          title="Diagnostic &"
          highlight="Health Packages"
          description="Comprehensive diagnostic packages and health screenings for preventive care and early detection. Explore our range of specialized health check-up packages."
        />

        <DiagnosticServicesSlider services={diagnosticsData} />
      </div>
    </section>
  );
};