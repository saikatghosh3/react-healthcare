import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, HeartPulse, Microscope, Users } from 'lucide-react';
import { handleImageError } from '../../utils/imageUtils';

const storyImage =
  'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800';

const highlights = [
  {
    icon: Building2,
    title: 'Modern Facilities',
    description:
      'State-of-the-art infrastructure designed for comfort and safety.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Microscope,
    title: 'Advanced Diagnostics',
    description:
      'Cutting-edge technology for accurate and early detection.',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Users,
    title: 'Caring Professionals',
    description:
      'A multidisciplinary team of doctors, nurses and specialists.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: HeartPulse,
    title: 'Patient-Centered Care',
    description:
      'Every decision we make puts your health and well-being first.',
    color: 'bg-rose-50 text-rose-600',
  },
];

export const AboutStory = () => {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={storyImage}
                alt="Our medical team at work"
                loading="lazy"
                onError={handleImageError}
                className="aspect-[4/4.2] w-full object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -right-3 top-8 rounded-2xl bg-blue-600 px-6 py-4 text-white shadow-lift lg:-right-6">
              <p className="text-3xl font-extrabold leading-none">25+</p>
              <p className="mt-1 text-sm text-blue-100">
                Years of Trusted Service
              </p>
            </div>

            {/* Quality card */}
            <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card ring-1 ring-slate-100 lg:-left-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                <HeartPulse className="h-6 w-6 text-emerald-600" />
              </span>
              <div>
                <p className="font-bold text-slate-900">50,000+</p>
                <p className="text-xs text-slate-500">Successful treatments</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Who We Are
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl text-balance">
                A Legacy of Care, Built on{' '}
                <span className="text-blue-600">Trust</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                What started as a small clinic with a single mission — to make
                quality healthcare accessible to everyone — has grown into one of
                the region's most trusted medical institutions.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-500">
                Today, our doors are open around the clock, serving thousands of
                families with the same warmth, dedication and excellence that
                defined us from day one.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-card"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <item.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Explore our services
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};