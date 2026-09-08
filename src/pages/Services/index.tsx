import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck } from 'lucide-react';
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
        id="specialties"
        eyebrow="Specialized Care"
        title="Medical"
        highlight="Specialties"
        description="Our team of specialized doctors provides expert care across a wide range of medical fields."
        services={specialtiesData}
      />

      <DiagnosticServices />

      <ServiceSection
        id="preventive"
        eyebrow="Stay Healthy"
        title="Preventive"
        highlight="Care"
        description="Comprehensive preventive care programs to maintain your health and prevent diseases."
        services={preventiveCareData}
        bg="gray"
      />

      <ServiceSection
        id="emergency"
        eyebrow="24/7 Support"
        title="Emergency"
        highlight="Services"
        description="Around-the-clock emergency care facilities with rapid response times and expert medical staff."
        services={emergencyData}
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 py-16 lg:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Not sure which service fits your needs?
              </h2>
              <p className="mt-3 text-lg text-blue-100">
                Talk to our care team today — we'll guide you to the right
                specialist and treatment plan.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+12345678900"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-card transition-all hover:bg-blue-50 hover:shadow-lift"
              >
                <PhoneCall className="h-4 w-4" />
                Call Us
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10"
              >
                <CalendarCheck className="h-4 w-4" />
                Book a Visit
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};