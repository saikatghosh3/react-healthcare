import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { handleImageError } from '../../../utils/imageUtils';

const packages = [
  {
    id: 'general-health',
    title: 'General Health Check-up',
    description: 'Essential blood tests, urine analysis and ECG screening.',
    price: '$199',
    image:
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=500',
    link: '/services/general-health',
    tests: ['Complete Blood Count', 'Liver Function', 'Kidney Function', 'ECG'],
    popular: false,
  },
  {
    id: 'premier-health',
    title: 'Premier Health Screening',
    description: 'Full-body screening with advanced diagnostics and consultation.',
    price: '$499',
    image:
      'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=500',
    link: '/services/premier-health',
    tests: ['Full Body Check-up', 'Cancer Markers', 'Thyroid Profile', 'Stress Test'],
    popular: true,
  },
  {
    id: 'wellness-cardiac',
    title: 'Wellness Cardiac Check-up',
    description: 'Focused heart health screening for complete cardiac assessment.',
    price: '$349',
    image:
      'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=500',
    link: '/services/wellness-cardiac',
    tests: ['ECG', 'Echo', 'Stress Test', 'Lipid Profile'],
    popular: false,
  },
  {
    id: 'vita-must',
    title: 'Vita Must',
    description: 'Essential vitamin and mineral deficiency screening.',
    price: '$179',
    image:
      'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=500',
    link: '/services/vita-must',
    tests: ['Vitamin D', 'Vitamin B12', 'Iron Profile', 'Calcium'],
    popular: false,
  },
];

export const HealthPackages = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 py-20 lg:py-24">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4">
          <SectionHeading
            light
            eyebrow="Health Packages"
            title="Comprehensive Check-up"
            highlight="Packages"
            description="Appropriate health packages for every age group, giving you complete peace of mind with early detection and prevention."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                {pkg.popular && (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-900 shadow">
                    Most Popular
                  </span>
                )}

                <div className="relative h-40 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    onError={handleImageError}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug text-slate-900">
                    {pkg.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">{pkg.description}</p>

                  <ul className="mt-4 space-y-2">
                    {pkg.tests.map((test, i) => (
                      <li
                        key={test}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                        {test}
                        {i === pkg.tests.length - 1 && (
                          <span className="text-xs text-slate-400">+ more</span>
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xl font-extrabold text-blue-600">
                      {pkg.price}
                    </span>
                    <Link
                      to={pkg.link}
                      className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                    >
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              View all packages
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};