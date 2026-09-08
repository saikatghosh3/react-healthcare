import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  HeartPulse,
  ShieldAlert,
  Bone,
  Syringe,
  Activity,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { handleImageError } from '../../../utils/imageUtils';

const services = [
  {
    id: 'cardiology',
    icon: HeartPulse,
    title: 'Cardiology',
    description:
      'Comprehensive heart care with diagnostics, treatment and prevention of cardiovascular diseases.',
    price: 'From $200',
    image:
      'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=500',
    iconColor: 'bg-rose-50 text-rose-600',
    link: '/services/cardiology',
  },
  {
    id: 'neurology',
    icon: Brain,
    title: 'Neurology',
    description:
      'Expert care for neurological disorders with advanced diagnostic and treatment options.',
    price: 'From $250',
    image:
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=500',
    iconColor: 'bg-violet-50 text-violet-600',
    link: '/services/neurology',
  },
  {
    id: 'orthopedics',
    icon: Bone,
    title: 'Orthopedics',
    description:
      'Specialized care for musculoskeletal conditions and sports injuries.',
    price: 'From $180',
    image:
      'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=500',
    iconColor: 'bg-amber-50 text-amber-600',
    link: '/services/orthopedics',
  },
  {
    id: 'general-health',
    icon: Activity,
    title: 'General Health Check-up',
    description:
      'Basic health assessment including blood tests, urine analysis and ECG for overall evaluation.',
    price: '$199',
    image:
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=500',
    iconColor: 'bg-emerald-50 text-emerald-600',
    link: '/services/general-health',
  },
  {
    id: 'vaccination',
    icon: Syringe,
    title: 'Vaccination',
    description:
      'Full range of vaccinations for children and adults to keep you protected.',
    price: 'From $30',
    image:
      'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=500',
    iconColor: 'bg-sky-50 text-sky-600',
    link: '/services/vaccination',
  },
  {
    id: 'emergency',
    icon: ShieldAlert,
    title: '24/7 Emergency Care',
    description:
      'Round-the-clock emergency medical services with rapid response time.',
    price: 'From $500',
    image:
      'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=500',
    iconColor: 'bg-red-50 text-red-600',
    link: '/services/emergency',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const ServicesPreview = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="What We Offer"
          title="Complete Medical Care"
          highlight="Under One Roof"
          description="From specialized treatments to preventive check-ups, our multidisciplinary team is here for every stage of your health journey."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Link
                to={service.link}
                className="group block h-full overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onError={handleImageError}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <span
                    className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl shadow-md ${service.iconColor}`}
                  >
                    <service.icon className="h-6 w-6" />
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-slate-800 backdrop-blur">
                    {service.price}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                    Learn more
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};