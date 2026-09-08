import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Star } from 'lucide-react';
import { doctors } from '../../Doctors/data/doctorsData';
import { SectionHeading } from './SectionHeading';
import { handleImageError } from '../../../utils/imageUtils';

const featuredDoctors = doctors.filter((d) =>
  ['5', '1', '10', '8'].includes(d.id)
);

export const DoctorsPreview = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Our Specialists"
          title="Meet Our"
          highlight="Expert Doctors"
          description="A dedicated team of board-certified specialists committed to your health and well-being."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/doctors/${doctor.id}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-blue-50">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    loading="lazy"
                    onError={handleImageError}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-blue-700 backdrop-blur">
                    {doctor.specialty}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {doctor.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-slate-500">
                    {doctor.experience} experience
                  </p>

                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="flex items-center gap-1 text-sm font-semibold text-slate-700">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      {doctor.rating}
                      <span className="font-normal text-slate-400">
                        ({doctor.reviews})
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                      <Calendar className="h-4 w-4" />
                      Book Now
                    </span>
                  </div>
                </div>
              </Link>
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
            className="group inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            View all doctors
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};