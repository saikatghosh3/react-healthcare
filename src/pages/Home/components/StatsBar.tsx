import { motion } from 'framer-motion';
import { Award, HeartPulse, Stethoscope, Users } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '25+',
    label: 'Years of Excellence',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Stethoscope,
    value: '50+',
    label: 'Expert Doctors',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Users,
    value: '15K+',
    label: 'Happy Patients',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: HeartPulse,
    value: '98%',
    label: 'Success Rate',
    color: 'bg-rose-50 text-rose-600',
  },
];

export const StatsBar = () => {
  return (
    <section className="relative z-10 -mt-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-100 shadow-card lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 bg-white p-6 transition-colors duration-300 hover:bg-blue-50/50"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stat.color}`}
              >
                <stat.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-2xl font-extrabold tracking-tight text-slate-900">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};