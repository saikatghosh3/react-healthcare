import React from 'react';
import {
  Video,
  CalendarCheck,
  CreditCard,
  ShieldCheck,
  Stethoscope,
  MonitorSmartphone,
  Lock,
  Headphones,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  HeartPulse,
  MessageSquare,
  FileText
} from 'lucide-react';

const benefits = [
  { icon: MonitorSmartphone, title: 'HD Video Consultations', text: 'Crystal-clear audio and video, optimized for any device — phone, tablet or laptop.' },
  { icon: CalendarCheck, title: 'Flexible Scheduling', text: 'Morning, evening or weekend slots. Reschedule or cancel with a single tap.' },
  { icon: ShieldCheck, title: 'Verified Doctors', text: 'Every specialist is board-certified with verified credentials and real patient reviews.' },
  { icon: Lock, title: 'Private & Secure', text: 'End-to-end encrypted sessions — your consultations stay completely confidential.' },
  { icon: FileText, title: 'Digital Prescriptions', text: 'Get e-prescriptions and medical notes instantly after your consultation.' },
  { icon: CreditCard, title: 'Easy Payments', text: 'Pay securely with card, UPI or insurance — transparent pricing, no hidden fees.' }
];

const specialties = [
  { icon: HeartPulse, label: 'General Physician', color: 'from-emerald-500 to-teal-600' },
  { icon: Stethoscope, label: 'Pediatrics', color: 'from-sky-500 to-blue-600' },
  { icon: HeartPulse, label: 'Cardiology', color: 'from-rose-500 to-red-600' },
  { icon: Stethoscope, label: 'Dermatology', color: 'from-amber-500 to-orange-600' },
  { icon: HeartPulse, label: 'Psychiatry', color: 'from-violet-500 to-purple-600' },
  { icon: Stethoscope, label: 'ENT', color: 'from-pink-500 to-rose-600' }
];

const howItWorks = [
  { title: 'Choose Your Doctor', text: 'Browse verified specialists, check ratings and pick the right one for you.' },
  { title: 'Pick a Time Slot', text: 'Select a convenient slot — available today, tomorrow or any day you prefer.' },
  { title: 'Consult on Video', text: 'Join your secure HD video call from anywhere, with just one click.' },
  { title: 'Get Prescription', text: 'Receive your e-prescription and follow-up plan instantly after the call.' }
];

const testimonials = [
  { name: 'Amina R.', text: 'Consulted a dermatologist on video in the middle of the night masking my dinner plans impossible? No — it took 10 minutes flat.', stars: 5, initial: 'A' },
  { name: 'David L.', text: 'The video quality was perfect and the doctor was incredibly thorough. Got my e-prescription within minutes.', stars: 5, initial: 'D' },
  { name: 'Fatima S.', text: 'No queues, no travel. My kids saw a pediatrician from home while we were travelling abroad. Life saver!', stars: 5, initial: 'F' }
];

export const VideoConsultation = () => {
  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-500 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />

        <div className="relative container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
              <Video className="h-4 w-4" /> Online Doctor Consultations
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.4rem]">
              See a Doctor From <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Anywhere, Anytime</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Skip the waiting room. Connect instantly with expert doctors over secure HD
              video, get a diagnosis, and receive your e-prescription — all from the
              comfort of your home.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/appointment"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-7 py-3.5 text-sm font-bold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-600 hover:to-indigo-600"
              >
                <Video className="h-5 w-5" /> Book a Video Consult
              </a>
              <a
                href="/doctors"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
              >
                Browse Doctors <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              {[
                { value: '10k+', label: 'Video Consults' },
                { value: '4.9/5', label: 'Patient Rating' },
                { value: '<5 min', label: 'Wait Time' }
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-extrabold text-blue-300 sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-400/40 to-indigo-400/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
                alt="Doctor in a video consultation"
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-emerald-500/90 px-3 py-1.5 text-xs font-bold text-white shadow">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Live & Secure
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/90">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Video Consultation Ready</p>
                    <p className="text-sm text-blue-300">Average join time — under 5 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Sparkles className="h-4 w-4" /> Why Video Consultation
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              World-Class Care, <span className="text-blue-600">Zero Waiting Room</span>
            </h2>
            <p className="mt-4 text-slate-500">
              Everything you love about our hospital — delivered through your screen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <b.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPECIALTIES ===== */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700">
              <Stethoscope className="h-4 w-4" /> Specialties Available
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Consult Certified Specialists Online
            </h2>
            <p className="mt-4 text-slate-500">
              From routine check-ups to specialist advice — 20+ departments covered online.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {specialties.map((s) => (
              <div
                key={s.label}
                className="group flex flex-col items-center rounded-3xl border border-slate-100 bg-slate-50/60 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:bg-white hover:shadow-lift"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                  <s.icon className="h-7 w-7" />
                </div>
                <p className="mt-4 text-sm font-bold text-slate-800">{s.label}</p>
                <span className="mt-1 text-xs font-medium text-blue-600">Book Online</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Clock className="h-4 w-4" /> Just 4 Steps
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((h, i) => (
              <div key={h.title} className="relative rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-extrabold text-white shadow-soft">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{h.text}</p>
                {i < howItWorks.length - 1 && (
                  <ArrowRight className="absolute -right-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-blue-300 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700">
              <MessageSquare className="h-4 w-4" /> Patient Stories
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Loved by 10,000+ Patients
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-3xl border border-slate-100 bg-slate-50/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-lift"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white">
                    {t.initial}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 px-6 py-14 text-center shadow-lift sm:px-12">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
              <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cyan-300 blur-3xl" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                <HeartPulse className="h-4 w-4" /> Start In Minutes
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Ready to Consult a Doctor Right Now?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-blue-100">
                Book your video consultation today and get first-rate medical advice without
                leaving home.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-700 shadow-lift transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  <Video className="h-5 w-5" /> Book a Video Consult
                </a>
                <a
                  href="tel:+15550007766"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
                >
                  <Headphones className="h-5 w-5" /> Talk to Us
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                <CheckCircle2 className="mr-1 inline h-4 w-4" />
                24/7 availability · Insurance accepted · 100% confidential
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};