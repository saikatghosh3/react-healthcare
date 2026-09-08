import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CalendarCheck,
  ClipboardCheck,
  HeartPulse,
  Stethoscope,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const steps = [
  {
    icon: CalendarCheck,
    title: 'Book an Appointment',
    description:
      'Choose your preferred doctor, date and time slot in just a few clicks.',
    color: 'bg-blue-600',
    soft: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Stethoscope,
    title: 'Consult a Specialist',
    description:
      'Visit our facility or join a secure video consultation from home.',
    color: 'bg-cyan-600',
    soft: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Diagnosis & Treatment',
    description:
      'Get accurate diagnostics and a personalized treatment plan tailored to you.',
    color: 'bg-emerald-600',
    soft: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: HeartPulse,
    title: 'Follow-up & Recovery',
    description:
      'Track your progress with dedicated follow-ups until you are fully recovered.',
    color: 'bg-rose-600',
    soft: 'bg-rose-50 text-rose-600',
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="How It Works"
          title="Getting Started Is"
          highlight="Simple"
          description="Four easy steps from booking to full recovery — we make healthcare hassle-free for you and your family."
        />

        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Connector line (desktop) */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden border-t-2 border-dashed border-blue-200 lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-white shadow-card ring-1 ring-slate-100 transition-transform duration-300 hover:-translate-y-1">
                <step.icon className={`h-8 w-8 ${step.soft}`} />
                <span
                  className={`absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-white ${step.color}`}
                >
                  {index + 1}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Start Your Journey Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};