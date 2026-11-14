import React from 'react';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  Microscope,
  ShieldCheck,
  Ambulance,
  ArrowRight,
} from 'lucide-react';

const quickLinks = [
  { label: 'Medical Specialties', href: '#specialties', icon: Stethoscope },
  { label: 'Health Packages', href: '#packages', icon: Microscope },
  { label: 'Preventive Care', href: '#preventive', icon: ShieldCheck },
  { label: 'Emergency Care', href: '#emergency', icon: Ambulance },
];

const stats = [
  { value: '50+', label: 'Specialists' },
  { value: '10+', label: 'Departments' },
  { value: '24/7', label: 'Emergency Care' },
  { value: '98%', label: 'Patient Satisfaction' },
];

export const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-600 shadow-sm">
            <Stethoscope className="h-4 w-4" />
            Our Services
          </span>

          <h1 className="mt-5 text-balance text-3xl font-extrabold leading-snug tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Complete healthcare,{' '}
            <span className="text-blue-600">under one roof</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            From routine check-ups to advanced diagnostics and emergency care,
            our expert team delivers world-class medical services with the
            latest technology and compassionate care.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {quickLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="group inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:text-blue-700 hover:shadow-card"
              >
                <Icon className="h-4 w-4 text-blue-600" />
                {label}
                <ArrowRight className="h-3.5 w-3.5 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/60 bg-white/70 px-6 py-6 text-center shadow-soft backdrop-blur"
            >
              <div className="text-3xl font-extrabold text-blue-600">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};