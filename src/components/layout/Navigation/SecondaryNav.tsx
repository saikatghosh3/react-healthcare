import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Video, Truck, MessageSquare } from 'lucide-react';

export const SecondaryNav = () => {
  return (
    <div className="h-9 bg-slate-900 text-blue-100 md:h-10">
      <div className="container mx-auto px-4">
        <div className="flex h-9 items-center justify-between gap-4 md:h-10">
          <div className="flex items-center gap-5 text-xs">
            <a
              href="tel:+12345678900"
              className="hidden items-center gap-1.5 transition-colors hover:text-white md:inline-flex"
            >
              <Phone className="h-3 w-3 text-cyan-400" />
              +1 (234) 567-8900
            </a>
            <a
              href="mailto:contact@healthcare.com"
              className="hidden items-center gap-1.5 transition-colors hover:text-white lg:inline-flex"
            >
              <Mail className="h-3 w-3 text-cyan-400" />
              contact@healthcare.com
            </a>
          </div>

          <div className="ml-auto flex items-center gap-4 text-xs md:gap-6">
            <Link
              to="/video-consultation"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Video className="h-3 w-3 text-cyan-400" />
              <span className="hidden sm:inline">Video Consultancy</span>
            </Link>
            <Link
              to="/home-collection"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Truck className="h-3 w-3 text-cyan-400" />
              <span className="hidden sm:inline">Sample Collection</span>
            </Link>
            <Link
              to="/feedback"
              className="hidden items-center gap-1.5 transition-colors hover:text-white sm:inline-flex"
            >
              <MessageSquare className="h-3 w-3 text-cyan-400" />
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};