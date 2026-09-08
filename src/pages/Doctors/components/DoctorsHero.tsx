import { motion } from 'framer-motion';
import { ShieldCheck, Star, Stethoscope, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

export const DoctorsHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-20">
        <div className="text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-white/20 backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Board-Certified Specialists
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-balance"
          >
            Our Medical <span className="text-cyan-300">Experts</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mx-auto mt-4 max-w-2xl text-lg text-blue-100"
          >
            Meet our team of experienced healthcare professionals dedicated to
            providing you with the best possible medical care.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <Stethoscope className="h-6 w-6 text-cyan-300" />
              </span>
              <div className="text-left">
                <p className="text-2xl font-extrabold">50+</p>
                <p className="text-sm text-blue-200">Expert Doctors</p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <Users className="h-6 w-6 text-cyan-300" />
              </span>
              <div className="text-left">
                <p className="text-2xl font-extrabold">10+</p>
                <p className="text-sm text-blue-200">Specialties</p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
              </span>
              <div className="text-left">
                <p className="text-2xl font-extrabold">4.8+</p>
                <p className="text-sm text-blue-200">Average Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};