import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Stethoscope } from 'lucide-react';

export const ContactInfo = () => {
  const items = [
    {
      icon: MapPin,
      title: 'Our Locations',
      lines: ['Main Campus — 123 Healthcare Ave, Medical City', 'North Clinic — 456 Wellness Blvd, Garden Town', 'South Clinic — 789 Care Lane, River District'],
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      lines: ['Emergency: 911 (24/7)', 'Reception: +1 (234) 567-890', 'Ambulance: +1 (234) 567-899'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['contact@healthcare.com', 'bookings@healthcare.com', 'feedback@healthcare.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      lines: ['Emergency Care: 24/7 / 365', 'Outpatient: Mon–Fri 8 AM – 8 PM', 'Weekends: Sat 9 AM – 5 PM'],
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-soft">
          <Stethoscope className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Visit Our Facilities</h2>
          <p className="text-sm text-slate-500">Three convenient locations across the city</p>
        </div>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="group flex gap-4 rounded-2xl p-4 transition-colors duration-300 hover:bg-blue-50/60"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <item.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
              {item.lines.map((line, i) => (
                <p
                  key={i}
                  className={`mt-0.5 text-sm ${i === 0 ? 'text-slate-600' : 'text-slate-400'}`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
        <p className="text-sm text-emerald-800">
          <span className="font-bold">Walk-ins welcome.</span> No appointment needed for
          emergencies — our team triages and stabilizes patients immediately.
        </p>
      </div>
    </div>
  );
};