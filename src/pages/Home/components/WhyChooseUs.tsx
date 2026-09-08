import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Microscope,
  Stethoscope,
  Wallet,
  HeartHandshake,
} from 'lucide-react';
import { handleImageError } from '../../../utils/imageUtils';

const features = [
  {
    icon: Stethoscope,
    title: 'Experienced Specialists',
    description: 'Board-certified doctors with years of clinical expertise',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Microscope,
    title: 'Advanced Technology',
    description: 'State-of-the-art diagnostics and treatment equipment',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock support, emergencies and consultations',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Wallet,
    title: 'Affordable Care',
    description: 'Transparent pricing and flexible payment options',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Treatment',
    description: 'Care plans tailored to your unique health needs',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: BadgeCheck,
    title: 'Accredited Facility',
    description: 'Nationally recognized quality and safety standards',
    color: 'bg-violet-50 text-violet-600',
  },
];

const bigImage =
  'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800';
const smallImage =
  'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=400';

export const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-2 mx-auto w-full max-w-lg lg:order-1"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={bigImage}
                alt="Doctor explaining results to patient"
                loading="lazy"
                onError={handleImageError}
                className="aspect-[4/4.2] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -right-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-card sm:block lg:-right-8">
              <img
                src={smallImage}
                alt="Medical equipment in use"
                loading="lazy"
                onError={handleImageError}
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="absolute -left-3 top-8 rounded-2xl bg-white px-6 py-4 shadow-card ring-1 ring-slate-100 lg:-left-6">
              <p className="text-3xl font-extrabold text-blue-600">25+</p>
              <p className="text-sm font-medium text-slate-500">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl text-balance">
                Healthcare That Puts <span className="text-blue-600">You First</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                For over two decades, we have combined medical expertise with
                genuine compassion to deliver the best possible outcomes for our
                patients.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-card"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Learn more about us
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};