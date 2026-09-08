import { motion } from 'framer-motion';
import { Eye, HeartHandshake, Target } from 'lucide-react';
import { SectionHeading } from '../Home/components/SectionHeading';

const cards = [
  {
    icon: Target,
    title: 'Our Mission',
    text: "To provide exceptional healthcare services that improve the quality of life for our patients through compassionate care, innovative treatments, and a commitment to excellence.",
    soft: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: "To be the leading healthcare provider recognized for clinical excellence, patient-centered care, and innovative medical solutions that enhance community well-being.",
    soft: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: HeartHandshake,
    title: 'Our Values',
    text: "Compassion, integrity, and accountability guide every interaction. We treat every patient with dignity, respect, and genuine care — because health is personal.",
    soft: 'bg-rose-50 text-rose-600',
  },
];

export const MissionVision = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Our Mission, Vision &"
          highlight="Values"
          description="The principles that shape every decision we make and every care plan we deliver."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
            >
              {/* Accent bar */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.soft}`}
              >
                <card.icon className="h-7 w-7" />
              </span>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-500">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};