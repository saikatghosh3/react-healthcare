import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Doctors', to: '/doctors' },
  { label: 'Our Services', to: '/services' },
  { label: 'Patient Portal', to: '/portal' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Emergency Care', to: '/emergency' },
];

const serviceLinks = [
  { label: 'Medical Specialties', to: '/services' },
  { label: 'Health Packages', to: '/services' },
  { label: 'Preventive Care', to: '/services' },
  { label: 'Video Consultancy', to: '/video-consultation' },
  { label: 'Sample Collection', to: '/home-collection' },
];

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 pb-10 pt-16 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-card">
                <Heart className="h-6 w-6 text-white" />
              </span>
              <span className="text-2xl font-extrabold text-white">
                Health<span className="text-blue-500">Care</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Providing quality healthcare for over 20 years. Compassionate
              care, advanced technology, and a team of experts dedicated to
              your wellbeing.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-blue-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-blue-400"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-blue-400"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span className="text-slate-400">
                  123 Healthcare Ave, Medical City, MC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-500" />
                <a
                  href="tel:+12345678900"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-blue-500" />
                <a
                  href="mailto:contact@healthcare.com"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  contact@healthcare.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-blue-500" />
                <span className="text-slate-400">
                  Mon – Sat: 8:00 AM – 9:00 PM
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-sm font-semibold text-white">
                Subscribe for health tips
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-3 flex overflow-hidden rounded-full border border-white/10 bg-white/5 focus-within:border-blue-500"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex shrink-0 items-center bg-blue-600 px-4 text-white transition-colors hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} HealthCare. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-white">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};