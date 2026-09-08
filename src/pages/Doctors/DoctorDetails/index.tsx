import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ShieldCheck,
  Star,
  Clock,
  Globe,
  Award,
  Calendar,
  Phone,
  Video,
  CheckCircle2,
  Stethoscope,
  HeartPulse,
  MapPin,
  Building2,
  CreditCard,
  ClipboardList,
} from 'lucide-react';
import { doctors } from '../data/doctorsData';
import { Doctor } from '../types';
import { AvailabilityCalendar } from './AvailabilityCalendar';
import { BookingModal } from '../components/BookingModal';
import { DoctorCard } from '../components/DoctorCard';
import { SectionHeading } from '../../Home/components/SectionHeading';
import { SuccessModal } from '../../../components/SuccessModal';
import { handleImageError } from '../../../utils/imageUtils';

const specialtyInfo: Record<string, { about: string; focus: string[]; conditions: string[] }> = {
  Cardiologist: {
    about:
      'Specializing in the diagnosis and treatment of heart and blood vessel conditions. Our cardiologist combines advanced diagnostic tools with personalized treatment plans to protect your heart health at every stage of life.',
    focus: [
      'Heart Disease Management',
      'Hypertension Control',
      'ECG & Echocardiography',
      'Preventive Cardiology',
    ],
    conditions: [
      'Hypertension',
      'Coronary Artery Disease',
      'Heart Failure',
      'Arrhythmia',
      'High Cholesterol',
    ],
  },
  Neurologist: {
    about:
      'Dedicated to the diagnosis and care of disorders affecting the brain, spinal cord, and nervous system. From chronic headaches to complex movement disorders, our neurologist provides comprehensive, compassionate care.',
    focus: [
      'Migraine & Headache Care',
      'Epilepsy Management',
      'Stroke Rehabilitation',
      'Movement Disorders',
    ],
    conditions: [
      'Migraine',
      'Epilepsy',
      'Parkinson\u2019s Disease',
      'Stroke',
      'Neuropathy',
    ],
  },
  Pediatrician: {
    about:
      'Focused on the physical, emotional, and social health of children from birth through adolescence. Our pediatrician works closely with families to ensure healthy growth, development, and lifelong wellbeing.',
    focus: [
      'Newborn & Infant Care',
      'Childhood Vaccination',
      'Growth Monitoring',
      'Child Nutrition Guidance',
    ],
    conditions: [
      'Colds & Flu',
      'Asthma in Children',
      'Allergies',
      'ADHD',
      'Growth Disorders',
    ],
  },
  'Orthopedic Surgeon': {
    about:
      'Expert in conditions affecting bones, joints, muscles, and ligaments. Our orthopedic surgeon offers both surgical and non-surgical solutions to restore mobility and relieve pain, so you can get back to living actively.',
    focus: [
      'Joint Replacement',
      'Sports Injury Recovery',
      'Spine Care',
      'Fracture Management',
    ],
    conditions: [
      'Arthritis',
      'Hip & Knee Pain',
      'Sports Injuries',
      'Back Pain',
      'Fractures',
    ],
  },
  Dermatologist: {
    about:
      'Specializing in the diagnosis and treatment of conditions affecting the skin, hair, and nails. Our dermatologist provides advanced medical and cosmetic care tailored to your skin type and concerns.',
    focus: [
      'Skin Condition Treatment',
      'Acne & Scar Care',
      'Cosmetic Dermatology',
      'Skin Cancer Screening',
    ],
    conditions: ['Acne', 'Eczema', 'Psoriasis', 'Hair Loss', 'Melasma'],
  },
};

const fallbackInfo: { about: string; focus: string[]; conditions: string[] } = {
  about:
    'A dedicated specialist committed to delivering patient-centered care using the latest evidence-based practices. Every consultation is focused on accurate diagnosis, clear communication, and a treatment plan tailored to you.',
  focus: [
    'Comprehensive Consultations',
    'Advanced Diagnostics',
    'Personalized Treatment Plans',
    'Continuity of Care',
  ],
  conditions: [
    'General Consultation',
    'Chronic Disease Management',
    'Preventive Screening',
    'Second Opinion',
    'Follow-up Care',
  ],
};

const sampleReviews = [
  {
    name: 'Ayesha Rahman',
    rating: 5,
    text: 'Very professional and attentive. The doctor took the time to explain everything clearly and made me feel completely at ease. Highly recommend!',
  },
  {
    name: 'Daniel Carter',
    rating: 5,
    text: 'Excellent care from start to finish. Booking was easy, the staff was friendly, and the consultation was thorough. My follow-up plan was simple to follow.',
  },
  {
    name: 'Nadia Islam',
    rating: 4,
    text: 'Knowledgeable and caring doctor. The clinic is well organized and clean. Slight wait time, but the quality of care made up for it.',
  },
];

const toLocalISO = (date: Date) =>
  [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('-');

const deriveHours = (schedule: Array<{ day: string; slots: string[] }>) => {
  const times = schedule.flatMap((s) => s.slots);
  if (!times.length) return null;
  const toMinutes = (t: string) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };
  const to12h = (minutes: number) => {
    const h = Math.floor(minutes / 60) % 24;
    const m = minutes % 60;
    const hh = h % 12 === 0 ? 12 : h % 12;
    return `${hh}:${String(m).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`;
  };
  return `${to12h(Math.min(...times.map(toMinutes)))} \u2013 ${to12h(
    Math.max(...times.map(toMinutes))
  )}`;
};

const insurers = [
  'Blue Cross',
  'Aetna',
  'Cigna',
  'UnitedHealth',
  'Medicare',
  'Cash Pay',
];

const consultationSteps = [
  {
    title: 'Review your history',
    text: 'A detailed discussion of your symptoms, medical history, and any existing reports.',
  },
  {
    title: 'Physical examination',
    text: 'A thorough, comfortable examination to gather the information needed for diagnosis.',
  },
  {
    title: 'Diagnostics if needed',
    text: 'Targeted tests and screenings recommended only when they add real value.',
  },
  {
    title: 'Personalised plan',
    text: 'A clear treatment plan you understand, plus scheduled follow-up support.',
  },
];

export const DoctorDetails = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((d) => d.id === doctorId);

  const [bookingDoctor, setBookingDoctor] = useState<Doctor | null>(null);
  const [initialDate, setInitialDate] = useState<string | undefined>(undefined);
  const [initialTime, setInitialTime] = useState<string | undefined>(undefined);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-20 text-center shadow-card ring-1 ring-slate-100">
            <h1 className="text-2xl font-bold text-slate-900">
              Doctor not found
            </h1>
            <p className="mt-2 text-slate-500">
              The specialist you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate('/doctors')}
              className="mt-6 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Back to Doctors
            </button>
          </div>
        </div>
      </div>
    );
  }

  const info = specialtyInfo[doctor.specialty] ?? fallbackInfo;
  const hours = deriveHours(doctor.schedule);
  const relatedDoctors = doctors.filter(
    (d) => d.specialty === doctor.specialty && d.id !== doctor.id
  );

  const nextAvailable = (() => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const todayIdx = new Date().getDay();
    const byIndex = new Map(
      doctor.schedule.map((s) => [days.indexOf(s.day), s])
    );
    for (let i = 0; i < 7; i++) {
      const entry = byIndex.get((todayIdx + i) % 7);
      if (entry) return { day: entry.day, slot: entry.slots[0] };
    }
    return null;
  })();

  const openBooking = (targetDoctor?: Doctor, date?: Date, slot?: string) => {
    if (!targetDoctor) return;
    setInitialDate(date ? toLocalISO(date) : undefined);
    setInitialTime(slot);
    setBookingDoctor(targetDoctor);
  };

  const handleBookingSubmit = () => {
    setBookingDoctor(null);
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-28 lg:pb-20">
      <div className="container mx-auto px-4 pt-10 lg:pt-16">
        <button
          onClick={() => navigate('/doctors')}
          className="group mb-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Doctors
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100"
        >
          <div className="grid lg:grid-cols-[340px_1fr]">
            <div className="relative aspect-[4/3] overflow-hidden bg-blue-50 lg:aspect-auto lg:min-h-[480px]">
              <img
                src={doctor.image}
                alt={doctor.name}
                onError={handleImageError}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-sm font-bold text-blue-700 shadow backdrop-blur">
                {doctor.specialty}
              </span>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-slate-900/60 px-3.5 py-1.5 backdrop-blur">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-bold text-white">
                  {doctor.rating}
                </span>
                <span className="text-sm text-white/80">
                  ({doctor.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="flex flex-col p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 ring-1 ring-blue-100">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Board Certified
                </span>
                {doctor.languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full bg-gray-50 px-3 py-1.5 text-xs font-semibold text-slate-500 ring-1 ring-slate-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                {doctor.name}
              </h1>
              <p className="mt-1 text-lg font-semibold text-blue-600">
                {doctor.specialty} · {doctor.experience} experience
              </p>

              <div className="mt-6 grid max-w-lg grid-cols-3 gap-3">
                <div className="rounded-xl bg-gray-50 px-4 py-3 text-center ring-1 ring-slate-100">
                  <p className="flex items-center justify-center gap-1 text-lg font-extrabold text-slate-900">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {doctor.rating}
                  </p>
                  <p className="text-xs text-slate-500">Rating</p>
                </div>
                <div className="rounded-xl bg-gray-50 px-4 py-3 text-center ring-1 ring-slate-100">
                  <p className="text-lg font-extrabold text-slate-900">
                    {doctor.reviews}
                  </p>
                  <p className="text-xs text-slate-500">Reviews</p>
                </div>
                <div className="rounded-xl bg-gray-50 px-4 py-3 text-center ring-1 ring-slate-100">
                  <p className="text-lg font-extrabold text-slate-900">
                    {doctor.languages.length}
                  </p>
                  <p className="text-xs text-slate-500">Languages</p>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                  <Award className="h-4 w-4 text-blue-600" />
                  Qualifications
                </h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.qualifications.map((qual) => (
                    <span
                      key={qual}
                      className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-blue-100"
                    >
                      {qual}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                <button
                  onClick={() => openBooking(doctor)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lift"
                >
                  <Calendar className="h-5 w-5" />
                  Book an Appointment
                </button>
                <a
                  href="tel:+12345678900"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <Phone className="h-5 w-5" />
                  Call Clinic
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100 md:p-8"
            >
              <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                <Stethoscope className="h-5 w-5 text-blue-600" />
                About {doctor.name}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                {info.about}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {info.focus.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl bg-blue-50/60 px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-blue-100"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                  <HeartPulse className="h-4 w-4 text-blue-600" />
                  Conditions &amp; Treatments
                </h3>
                <div className="flex flex-wrap gap-2">
                  {info.conditions.map((condition) => (
                    <span
                      key={condition}
                      className="rounded-full bg-gray-50 px-4 py-1.5 text-sm font-semibold text-slate-600 ring-1 ring-slate-100"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100 md:p-8"
            >
              <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                <ClipboardList className="h-5 w-5 text-blue-600" />
                How your consultation works
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {consultationSteps.map((step, i) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-extrabold text-blue-700 ring-1 ring-blue-100">
                        {i + 1}
                      </span>
                      {i < consultationSteps.length - 1 && (
                        <span className="mt-2 h-full w-px bg-slate-100" />
                      )}
                    </div>
                    <div className="pb-2">
                      <h3 className="text-sm font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100 md:p-8"
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Availability
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Next 15 days — tap any time slot to book instantly.
                  </p>
                </div>
              </div>
              <AvailabilityCalendar
                schedule={doctor.schedule}
                onSelectSlot={(date, slot) =>
                  openBooking(doctor, date, slot)
                }
              />
            </motion.div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-36">
            <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  onError={handleImageError}
                  className="h-14 w-14 rounded-xl object-cover object-top ring-2 ring-blue-100"
                />
                <div>
                  <h3 className="font-bold text-slate-900">{doctor.name}</h3>
                  <p className="text-sm font-semibold text-blue-600">
                    {doctor.specialty}
                  </p>
                </div>
              </div>

              <div className="my-5 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-sm">
                <span className="flex items-center gap-2 text-slate-600">
                  <Video className="h-4 w-4 text-blue-600" />
                  Video &amp; In-person
                </span>
                <span className="font-bold text-slate-900">Available Now</span>
              </div>

              {nextAvailable && (
                <p className="mb-5 flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                  <Clock className="h-4 w-4" />
                  Next slot: {nextAvailable.day} at {nextAvailable.slot}
                </p>
              )}

              <button
                onClick={() => openBooking(doctor)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3.5 text-sm font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lift"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </button>
              <a
                href="tel:+12345678900"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
              >
                <Phone className="h-4 w-4" />
                Call Clinic
              </a>
              <p className="mt-4 text-center text-xs text-slate-400">
                Free cancellation up to 24 hours before your visit.
              </p>
            </div>

            <div className="divide-y divide-slate-100 rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
              <div className="flex items-center justify-between py-2.5 text-sm first:pt-0 last:pb-0">
                <span className="flex items-center gap-2 text-slate-500">
                  <Clock className="h-4 w-4 text-blue-600" />
                  Experience
                </span>
                <span className="font-bold text-slate-900">
                  {doctor.experience}
                </span>
              </div>
              <div className="flex items-center justify-between py-2.5 text-sm first:pt-0 last:pb-0">
                <span className="flex items-center gap-2 text-slate-500">
                  <Globe className="h-4 w-4 text-blue-600" />
                  Languages
                </span>
                <span className="font-bold text-slate-900">
                  {doctor.languages.join(', ')}
                </span>
              </div>
              <div className="flex items-center justify-between py-2.5 text-sm first:pt-0 last:pb-0">
                <span className="flex items-center gap-2 text-slate-500">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  Patient Rating
                </span>
                <span className="font-bold text-slate-900">
                  {doctor.rating} / 5
                </span>
              </div>
              <div className="flex items-center justify-between py-2.5 text-sm first:pt-0 last:pb-0">
                <span className="flex items-center gap-2 text-slate-500">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  Consultation Days
                </span>
                <span className="font-bold text-slate-900">
                  {doctor.schedule.map((s) => s.day.slice(0, 3)).join(' · ')}
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
              <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
                <Building2 className="h-4 w-4 text-blue-600" />
                Visit Information
              </h3>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-700">Main Clinic</p>
                    <p className="text-slate-500">
                      123 Healthcare Ave, Medical City, MC 12345
                    </p>
                  </div>
                </div>
                {hours && (
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-700">
                        Consultation Hours
                      </p>
                      <p className="text-slate-500">
                        {hours} ·{' '}
                        {doctor.schedule.map((s) => s.day.slice(0, 3)).join(', ')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <CreditCard className="h-4 w-4 text-blue-600" />
                  Insurance &amp; Payments
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  We accept most major insurance plans and all major
                  debit/credit cards.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {insurers.map((insurer) => (
                    <span
                      key={insurer}
                      className="rounded-lg bg-gray-50 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-100"
                    >
                      {insurer}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16"
        >
          <SectionHeading
            eyebrow="Patient Feedback"
            title="Trusted by"
            highlight="patients like you"
            description="Real experiences from patients who have visited our specialist."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {sampleReviews.map((review) => {
              const initials = review.name
                .split(' ')
                .map((n) => n[0])
                .join('');
              return (
                <div
                  key={review.name}
                  className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      {initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {review.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        Verified patient
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {relatedDoctors.length > 0 && (
          <section className="mt-16">
            <SectionHeading
              eyebrow="More Specialists"
              title={`More ${doctor.specialty}s`}
              description="Meet other specialists from the same department."
            />
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {relatedDoctors.map((related) => (
                <DoctorCard
                  key={related.id}
                  doctor={related}
                  onBookAppointment={(id) =>
                    openBooking(
                      doctors.find((d) => d.id === id),
                      undefined
                    )
                  }
                />
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-4 shadow-lift backdrop-blur lg:hidden">
        <button
          onClick={() => openBooking(doctor)}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3.5 text-sm font-bold text-white shadow-card transition-all hover:bg-blue-700"
        >
          <Calendar className="h-4 w-4" />
          Book Appointment
        </button>
      </div>

      <AnimatePresence>
        {bookingDoctor && (
          <BookingModal
            doctor={bookingDoctor}
            initialDate={initialDate}
            initialTime={initialTime}
            onClose={() => setBookingDoctor(null)}
            onSubmit={handleBookingSubmit}
          />
        )}
      </AnimatePresence>

      {showSuccess && (
        <SuccessModal
          message="Your appointment has been booked successfully! The confirmation details have been saved."
          onClose={() => setShowSuccess(false)}
        />
      )}
    </div>
  );
};