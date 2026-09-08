import React from 'react';
import { Star, Clock, Globe, ArrowRight, Calendar, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Doctor } from '../types';
import { handleImageError } from '../../../utils/imageUtils';

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctorId: string) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  onBookAppointment,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group flex h-full flex-col rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:ring-blue-100"
    >
      {/* Top row: avatar + identity */}
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <div className="h-24 w-24 overflow-hidden rounded-2xl bg-blue-50 ring-1 ring-slate-100">
            <img
              src={doctor.image}
              alt={doctor.name}
              loading="lazy"
              onError={handleImageError}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-0.5 text-[11px] font-bold text-white shadow backdrop-blur">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {doctor.rating}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <span className="inline-flex max-w-full items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">
            <BadgeCheck className="h-3 w-3 shrink-0" />
            <span className="truncate">{doctor.specialty}</span>
          </span>
          <h3 className="mt-1.5 truncate text-lg font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
            {doctor.name}
          </h3>
          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-blue-600" />
              {doctor.experience}
            </span>
            <span className="flex items-center gap-1">
              <Globe className="h-3.5 w-3.5 text-blue-600" />
              {doctor.languages.join(', ')}
            </span>
          </div>
        </div>
      </div>

      {/* Qualifications */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {doctor.qualifications.map((qual) => (
          <span
            key={qual}
            className="rounded-md bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-100"
          >
            {qual}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-5 flex items-center gap-2.5 border-t border-slate-100 pt-4">
        <Link
          to={`/doctors/${doctor.id}`}
          className="group/profile inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:bg-slate-200"
        >
          View Profile
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/profile:translate-x-0.5" />
        </Link>
        <button
          onClick={() => onBookAppointment(doctor.id)}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-card"
        >
          <Calendar className="h-4 w-4" />
          Book
        </button>
      </div>
    </motion.article>
  );
};