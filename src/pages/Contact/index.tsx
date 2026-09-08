import React from 'react';
import { ContactHero } from './components/ContactHero';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { Map } from './components/Map';
import { SocialLinks } from './components/SocialLinks';

export const Contact = () => {
  return (
    <div className="bg-slate-50">
      <ContactHero />

      <div className="container mx-auto px-4 py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>

          <div>
            <ContactForm />
          </div>
        </div>

        <div className="mt-8">
          <Map />
        </div>
      </div>
    </div>
  );
};