import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { DetailFeature, ProcessStep } from '../data/serviceDetailContent';

interface ServiceFeaturesProps {
  features?: DetailFeature[];
  process?: ProcessStep[];
  benefits?: string[];
}

export const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({
  features = [],
  process = [],
  benefits = [],
}) => {
  return (
    <div className="space-y-14">
      {process.length > 0 && (
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What to Expect
          </h2>
          <p className="mt-2 text-slate-500">
            A simple, guided journey from booking to follow-up.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl border border-slate-100 bg-slate-50/60 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-base font-extrabold text-white shadow-soft">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {features.length > 0 && (
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What&apos;s Included
          </h2>
          <p className="mt-2 text-slate-500">
            Everything you get as part of this service.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="group flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {benefits.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Why Choose Us</h2>
            <ul className="mt-5 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span className="text-sm text-slate-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7 shadow-card">
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
              Need personalized guidance?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Every patient is unique. Talk to our care team and we will tailor a plan
              that best fits your health needs and budget.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+12345678900"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Call Our Care Team
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-bold text-blue-700 transition-all duration-300 hover:bg-blue-50"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};