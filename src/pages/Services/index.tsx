import React from 'react';
import { ServicesHero } from './components/ServicesHero';
import { ServiceSection } from './components/ServiceSection';
import { DiagnosticServices } from './components/DiagnosticServices';
import {
  specialtiesData,
  preventiveCareData,
  emergencyData
} from './data/servicesData';

export const Services = () => {
  return (
    <div>
      <ServicesHero />
      
      <ServiceSection
        title="Medical Specialties"
        description="Our team of specialized doctors provides expert care across a wide range of medical fields."
        services={specialtiesData}
      />

      <DiagnosticServices />

      <ServiceSection
        title="Preventive Care"
        description="Comprehensive preventive care programs to maintain your health and prevent diseases."
        services={preventiveCareData}
      />

      <ServiceSection
        title="Emergency Services"
        description="24/7 emergency care facilities with rapid response times and expert medical staff."
        services={emergencyData}
      />
    </div>
  );
};