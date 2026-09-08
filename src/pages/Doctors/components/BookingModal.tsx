import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Star, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { handleImageError } from '../../../utils/imageUtils';
import { Doctor } from '../types';

interface BookingModalProps {
  doctor: Doctor;
  initialDate?: string;
  initialTime?: string;
  onClose: () => void;
  onSubmit: (formData: BookingFormData) => void;
}

interface BookingFormData {
  doctorId: string;
  date: string;
  slot: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  reason: string;
}

const inputClass =
  'w-full rounded-xl border-0 bg-gray-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200 transition-all duration-300 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500';
const labelClass = 'mb-1.5 block text-sm font-semibold text-slate-700';

export const BookingModal: React.FC<BookingModalProps> = ({
  doctor,
  initialDate,
  initialTime,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    date: initialDate ?? '',
    time: initialTime ?? '',
    reason: '',
  });

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const appointmentData: BookingFormData & {
      doctorName: string;
      status: string;
      createdAt: string;
    } = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      date: formData.date,
      slot: formData.time,
      patientName: formData.patientName,
      patientEmail: formData.patientEmail,
      patientPhone: formData.patientPhone,
      reason: formData.reason,
      status: 'upcoming',
      createdAt: new Date().toISOString(),
    };

    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointments.push({
      id: Date.now().toString(),
      ...appointmentData,
    });
    localStorage.setItem('appointments', JSON.stringify(appointments));

    onSubmit({
      doctorId: doctor.id,
      date: formData.date,
      slot: formData.time,
      patientName: formData.patientName,
      patientEmail: formData.patientEmail,
      patientPhone: formData.patientPhone,
      reason: formData.reason,
    });
  };

  const getAvailableSlots = () => {
    if (!formData.date) return [];
    const date = new Date(formData.date + 'T12:00:00');
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    return doctor.schedule.find(s => s.day === dayOfWeek)?.slots || [];
  };

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
      if (doctor.schedule.some(s => s.day === dayOfWeek)) {
        dates.push({
          value: [
            date.getFullYear(),
            String(date.getMonth() + 1).padStart(2, '0'),
            String(date.getDate()).padStart(2, '0'),
          ].join('-'),
          label: date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        });
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();
  const availableSlots = getAvailableSlots();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 backdrop-blur-sm sm:items-center sm:p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white shadow-lift sm:rounded-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-100 bg-white px-6 py-5">
          <div className="flex items-center gap-3">
            <img
              src={doctor.image}
              alt={doctor.name}
              onError={handleImageError}
              className="h-12 w-12 rounded-xl object-cover object-top ring-2 ring-blue-100"
            />
            <div>
              <h2 className="text-lg font-bold text-slate-900">{doctor.name}</h2>
              <p className="text-sm font-semibold text-blue-600">
                {doctor.specialty}
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-xs font-medium text-slate-500">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                {doctor.rating} · {doctor.reviews} reviews
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking form"
            className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                value={formData.patientName}
                onChange={(e) =>
                  setFormData({ ...formData, patientName: e.target.value })
                }
                className={inputClass}
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className={labelClass}>Phone Number</label>
              <input
                type="tel"
                value={formData.patientPhone}
                onChange={(e) =>
                  setFormData({ ...formData, patientPhone: e.target.value })
                }
                className={inputClass}
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className={labelClass}>Email</label>
            <input
              type="email"
              value={formData.patientEmail}
              onChange={(e) =>
                setFormData({ ...formData, patientEmail: e.target.value })
              }
              className={inputClass}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarIcon className="h-3.5 w-3.5 text-blue-600" />
                  Select Date
                </span>
              </label>
              <select
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value, time: '' })
                }
                className={inputClass}
                required
              >
                <option value="">Choose a date</option>
                {availableDates.map((date) => (
                  <option key={date.value} value={date.value}>
                    {date.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-blue-600" />
                  Select Time
                </span>
              </label>
              <select
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className={inputClass}
                required
                disabled={!formData.date}
              >
                <option value="">
                  {formData.date ? 'Choose a time' : 'Pick a date first'}
                </option>
                {availableSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className={labelClass}>Reason for Visit</label>
            <textarea
              value={formData.reason}
              onChange={(e) =>
                setFormData({ ...formData, reason: e.target.value })
              }
              className={`${inputClass} resize-none`}
              rows={3}
              required
              placeholder="Please describe your reason for visiting"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-blue-600 py-3.5 text-sm font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lift"
          >
            Confirm Booking
          </button>
          <p className="mt-3 text-center text-xs text-slate-400">
            You'll receive a confirmation email with your appointment details.
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};