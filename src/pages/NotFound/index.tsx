import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  Search,
  Stethoscope,
  UserRound,
  HeartPulse,
  LayoutDashboard,
  Phone,
  MessageCircle,
  Compass,
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Video,
} from 'lucide-react';

const suggestedPages = [
  {
    to: '/',
    icon: Home,
    title: 'Home',
    description: 'Back to our homepage and explore everything we offer.',
  },
  {
    to: '/services',
    icon: Stethoscope,
    title: 'Services',
    description: 'Browse diagnostics, check-ups, lab tests and care packages.',
  },
  {
    to: '/doctors',
    icon: UserRound,
    title: 'Our Doctors',
    description: 'Meet our specialists and book an appointment.',
  },
  {
    to: '/portal',
    icon: LayoutDashboard,
    title: 'Patient Portal',
    description: 'Access your records, reports and prescriptions.',
  },
  {
    to: '/video-consultation',
    icon: Video,
    title: 'Video Consultation',
    description: 'Consult a doctor online from the comfort of your home.',
  },
  {
    to: '/emergency',
    icon: Phone,
    title: 'Emergency',
    description: 'Immediate help and our 24/7 emergency contact details.',
  },
  {
    to: '/faq',
    icon: MessageCircle,
    title: 'FAQ',
    description: 'Answers to common questions about appointments and payments.',
  },
  {
    to: '/contact',
    icon: CalendarCheck,
    title: 'Contact Us',
    description: 'Reach out to our team — we are happy to help.',
  },
];

const quickActions = [
  { to: '/doctors', label: 'Book an Appointment', primary: true },
  { to: '/services', label: 'Explore Services', primary: false },
  { to: '/', label: 'Go to Homepage', primary: false },
];

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-500 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
              <Compass className="h-4 w-4" />
              Error 404
            </span>

            <h1 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-snug text-white sm:text-4xl">
              Oops — this page took a{' '}
              <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                wrong turn
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              The page you are looking for doesn't exist or has been moved.
              Don't worry — here are some popular sections to get you back on
              track.
            </p>

            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </button>
              {quickActions.map((action) => (
                <Link
                  key={action.to + action.label}
                  to={action.to}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all ${
                    action.primary
                      ? 'bg-blue-500 text-white shadow-lift hover:bg-blue-600'
                      : 'border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20'
                  }`}
                >
                  {action.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Suggested pages */}
      <section className="container mx-auto px-4 py-14">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
            <Search className="h-4 w-4" />
            Suggested for you
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Popular pages &amp; sections
          </h2>
          <p className="mx-auto mt-2 max-w-md text-slate-500">
            Jump straight to the sections most visitors find helpful.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {suggestedPages.map((page, i) => (
            <motion.div
              key={page.to}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
            >
              <Link
                to={page.to}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lift"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 transition-colors group-hover:from-blue-600 group-hover:to-indigo-700 group-hover:text-white">
                  <page.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-blue-700">
                  {page.title}
                </h3>
                <p className="mt-1.5 flex-grow text-sm leading-relaxed text-slate-500">
                  {page.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  Visit
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Still stuck */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card sm:p-8">
          <HeartPulse className="mx-auto h-8 w-8 text-blue-600" />
          <h3 className="mt-3 text-lg font-bold text-slate-900">
            Still can't find what you need?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Our team is available around the clock to help you with
            appointments, reports or any question.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+12345678900"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-card transition-all hover:bg-blue-700 hover:shadow-lift"
            >
              <Phone className="h-4 w-4" />
              Call +1 (234) 567-8900
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50"
            >
              <MessageCircle className="h-4 w-4" />
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
