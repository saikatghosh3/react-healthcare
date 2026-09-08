import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone } from 'lucide-react';

export const AboutCta = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-6 py-16 text-center shadow-lift sm:px-12"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border-[28px] border-white/10" />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute left-[15%] top-8 h-3 w-3 rounded-full bg-cyan-300" />
            <div className="absolute right-[20%] bottom-10 h-4 w-4 rounded-full bg-cyan-300/70" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl text-balance">
              Experience the Difference of{' '}
              <span className="text-cyan-300">Compassionate Care</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
              Join thousands of families who trust HealthCare for their health
              and well-being. We're here for you, every step of the way.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/doctors"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto"
              >
                <Calendar className="h-5 w-5" />
                Book an Appointment
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:911"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/15 px-8 py-4 font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25 sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call 911
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};