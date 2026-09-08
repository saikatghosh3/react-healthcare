import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const Map = () => {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-soft">
            <MapPin className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Find Us on the Map</h2>
            <p className="text-sm text-slate-500">123 Healthcare Ave, Medical City, MC 12345</p>
          </div>
        </div>
        <a
          href="https://maps.google.com/?q=123+Healthcare+Ave+Medical+City"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-card"
        >
          <Navigation className="h-4 w-4" /> Get Directions
        </a>
      </div>
      <div className="h-[380px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Healthcare location map"
          className="h-full w-full hover:opacity-95"
        ></iframe>
      </div>
    </div>
  );
};