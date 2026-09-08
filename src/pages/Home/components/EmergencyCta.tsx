import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Ambulance, Clock, Phone, ArrowRight } from 'lucide-react';

export const EmergencyCta = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-red-600 via-red-700 to-rose-800 px-6 py-14 text-white shadow-lift sm:px-12 lg:px-16"
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[24px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute right-1/3 top-1/2 h-3 w-3 animate-ping rounded-full bg-white/40" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr_auto]">
            {/* Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur lg:mx-0">
              <Ambulance className="h-10 w-10" />
            </div>

            {/* Text */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-balance">
                Medical Emergency? We're Here 24/7
              </h2>
              <p className="mt-3 max-w-xl text-red-100">
                Our emergency department is fully equipped with advanced life
                support and rapid-response teams, ready to help when you need it
                most.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-red-200" />
                  <span className="font-semibold">Round the clock care</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ambulance className="h-5 w-5 text-red-200" />
                  <span className="font-semibold">Rapid response team</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col items-center gap-4 lg:items-end">
              <a
                href="tel:911"
                className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-red-700 shadow-card transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Phone className="h-6 w-6" />
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide opacity-70">
                    Emergency Hotline
                  </span>
                  <span className="block text-2xl font-extrabold leading-none">
                    911
                  </span>
                </span>
              </a>
              <Link
                to="/emergency"
                className="group inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25"
              >
                Emergency Department
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};