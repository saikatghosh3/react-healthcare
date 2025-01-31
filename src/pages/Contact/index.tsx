import React from 'react';
import { ContactHero } from './components/ContactHero';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { Map } from './components/Map';
import { SocialLinks } from './components/SocialLinks';

export const Contact = () => {
  return (
    <div>
      <ContactHero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Map />
        </div>
      </div>
    </div>
  );
};