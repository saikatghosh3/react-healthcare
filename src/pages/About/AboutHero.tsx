import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import { handleImageError } from '../../utils/imageUtils';

const heroMainImage =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800';
const heroSecondaryImage =
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

export const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
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
                About HealthCare
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance"
            >
              Healthcare Driven by{' '}
              <span className="text-blue-600">Compassion</span> &amp; Excellence
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500"
            >
              For over two decades, we have been delivering world-class medical
              care with a patient-first approach — combining advanced technology,
              experienced specialists and genuine compassion.
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
                Meet Our Doctors
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 ring-1 ring-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-10 grid max-w-lg grid-cols-3 gap-4"
            >
              <div>
                <p className="text-3xl font-extrabold text-blue-600">25+</p>
                <p className="text-sm text-slate-500">Years of Care</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-600">15K+</p>
                <p className="text-sm text-slate-500">Patients Treated</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-600">98%</p>
                <p className="text-sm text-slate-500">Satisfaction</p>
              </div>
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
                  src={heroMainImage}
                  alt="Doctor consulting with a patient"
                  onError={handleImageError}
                  className="aspect-[4/4.4] w-full object-cover"
                />
              </div>

              {/* Secondary image */}
              <div className="absolute -bottom-8 -left-6 hidden w-36 overflow-hidden rounded-2xl border-4 border-white shadow-card sm:block">
                <img
                  src={heroSecondaryImage}
                  alt="Laboratory analysis"
                  onError={handleImageError}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating card - accreditation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute -right-4 top-8 rounded-2xl bg-white p-3.5 shadow-card ring-1 ring-slate-100"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <Award className="h-5 w-5 text-blue-600" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Accredited</p>
                    <p className="text-xs text-slate-500">
                      Certified quality care
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card - patient-first */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute -right-2 bottom-16 rounded-2xl bg-white p-3.5 shadow-card ring-1 ring-slate-100"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50">
                    <HeartHandshake className="h-5 w-5 text-rose-600" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Patient First
                    </p>
                    <p className="text-xs text-slate-500">
                      Compassionate care
                    </p>
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