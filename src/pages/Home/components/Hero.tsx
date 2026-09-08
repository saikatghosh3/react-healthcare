import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { handleImageError } from '../../../utils/imageUtils';
import {
  ArrowRight,
  Calendar,
  Phone,
  ShieldCheck,
  Star,
} from 'lucide-react';

const heroDoctorImage =
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800';
const heroCheckupImage =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-card ring-1 ring-blue-100">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
                Trusted Healthcare Provider
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance"
            >
              Your Health,{' '}
              <span className="relative text-blue-600">
                Our Priority
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-blue-300"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 3 150 3 198 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500"
            >
              Experience world-class healthcare with our team of expert medical
              professionals, state-of-the-art technology and compassionate care
              — all under one roof.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/doctors"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                <Calendar className="h-5 w-5" />
                Book an Appointment
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 ring-1 ring-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[
                    'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100',
                    'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=100',
                    'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100',
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Happy patient"
                      className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-slate-600">
                    15,000+ happy patients
                  </p>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-slate-200 sm:block" />

              <a
                href="tel:911"
                className="flex items-center gap-2 text-slate-700 transition-colors hover:text-blue-600"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                  <Phone className="h-5 w-5 text-red-600" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">Emergency</span>
                  <span className="block text-sm font-bold">Call +911</span>
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right content - image composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="relative">
              {/* Main image */}
              <div className="overflow-hidden rounded-[2rem] ring-8 ring-white shadow-lift">
                <img
                  src={heroDoctorImage}
                  alt="Doctor smiling with colleague at HealthCare"
                  onError={handleImageError}
                  className="aspect-[4/4.4] w-full object-cover"
                />
              </div>

              {/* Small secondary image */}
              <div className="absolute -bottom-8 -left-6 hidden w-36 overflow-hidden rounded-2xl border-4 border-white shadow-card sm:block">
                <img
                  src={heroCheckupImage}
                  alt="Health check-up consultation"
                  onError={handleImageError}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating card - emergency */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute -right-4 top-8 rounded-2xl bg-white p-3.5 pl-4 shadow-card ring-1 ring-slate-100"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
                    </span>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      24/7 Emergency
                    </p>
                    <p className="text-xs text-slate-500">
                      Response within minutes
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card - rating */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute -right-2 bottom-16 rounded-2xl bg-white p-3.5 shadow-card ring-1 ring-slate-100"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-800">4.9/5</p>
                    <p className="text-xs text-slate-500">2,400+ reviews</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};