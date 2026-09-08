import React from 'react';
import {
  Home,
  Truck,
  Clock,
  ShieldCheck,
  Phone,
  TestTube,
  FlaskConical,
  Syringe,
  Stethoscope,
  Microscope,
  Pill,
  Droplet,
  CheckCircle2,
  ArrowRight,
  CalendarCheck,
  BadgeCheck,
  HeartPulse,
  Sparkles,
  UserRound,
  ClipboardCheck,
  ChevronRight,
  FileText
} from 'lucide-react';

const testCategories = [
  { icon: TestTube, label: 'Blood Tests', count: 120, color: 'from-rose-500 to-red-500' },
  { icon: Microscope, label: 'Microbiology', count: 45, color: 'from-violet-500 to-purple-500' },
  { icon: Droplet, label: 'Urine & Stool', count: 30, color: 'from-amber-500 to-orange-500' },
  { icon: Stethoscope, label: 'Cardiac Panel', count: 20, color: 'from-pink-500 to-rose-500' },
  { icon: Pill, label: 'Hormone Tests', count: 35, color: 'from-indigo-500 to-blue-500' },
  { icon: FlaskConical, label: 'Molecular / PCR', count: 25, color: 'from-teal-500 to-emerald-500' }
];

const steps = [
  { icon: CalendarCheck, title: 'Book a Slot', text: 'Schedule your preferred time online or over the phone — morning or evening, it is your call.' },
  { icon: UserRound, title: 'Phlebotomist Visits', text: 'A trained, certified professional arrives at your doorstep with sterile, single-use equipment.' },
  { icon: ClipboardCheck, title: 'Sample Collection', text: 'Samples are collected hygienically under strict protocols, right in the comfort of your home.' },
  { icon: FlaskConical, title: 'Lab Analysis', text: 'Your samples reach our NABL-accredited lab where specialists run precise diagnostics.' },
  { icon: FileText, title: 'Digital Reports', text: 'Get accurate reports delivered directly to your phone and email — usually within 24–48 hours.' }
];

const features = [
  { icon: Truck, title: 'Doorstep Collection', text: 'Our team comes to you — no queues, no travel, no waiting rooms.' },
  { icon: ShieldCheck, title: 'Certified Professionals', text: 'Experienced, trained phlebotomists following strict world-class safety protocols.' },
  { icon: Clock, title: 'Flexible Timings', text: 'Choose early-morning slots before breakfast or evening slots after work.' },
  { icon: BadgeCheck, title: 'NABL-Accredited Lab', text: 'Internationally standardized labs for accurate and reliable diagnostics.' },
  { icon: HeartPulse, title: 'Free Doctor Review', text: 'A quick teleconsultation for complex results, so you always know your next step.' },
  { icon: CalendarCheck, title: 'Easy Rescheduling', text: 'Life happens — change or cancel your slot with zero hassle, anytime.' }
];

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all duration-200 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100';

export const HomeCollection = () => {
  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-900 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-teal-400 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />

        <div className="relative container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <Sparkles className="h-4 w-4" /> Sample Collection At Your Doorstep
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Lab Tests Made <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Effortless</span> — Right At Home
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Skip the queues and travel. Our certified phlebotomists visit you, collect
              samples safely, and deliver accurate reports directly to your phone — all in
              24–48 hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+15550009988"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-600 hover:to-teal-600"
              >
                <Phone className="h-5 w-5" /> Book Home Collection
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
              >
                Need Help? <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              {[
                { value: '50K+', label: 'Home Tests Done' },
                { value: '4.9/5', label: 'Patient Rating' },
                { value: '<24hr', label: 'Report Delivery' }
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-extrabold text-emerald-300 sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/40 to-teal-400/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1200"
                alt="Nurse collecting a blood sample at home"
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/90">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Home Sample Collection</p>
                    <p className="text-sm text-emerald-300">Available 7 Days a Week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <HeartPulse className="h-4 w-4" /> Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Everything You Need, Nothing You Don't
            </h2>
            <p className="mt-4 text-slate-500">
              We've reimagined lab testing from the ground up — combining professional care
              with the comfort of home.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEST CATEGORIES ===== */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-700">
              <FlaskConical className="h-4 w-4" /> Popular Packages
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Tests We Collect At Home
            </h2>
            <p className="mt-4 text-slate-500">
              From routine health checks to specialized panels — we cover it all at your doorstep.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testCategories.map((t) => (
              <div
                key={t.label}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/60 p-7 transition-all duration-300 hover:border-emerald-200 hover:bg-white hover:shadow-lift"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${t.color} text-white shadow-soft`}>
                  <t.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{t.label}</h3>
                <p className="mt-1 text-sm font-medium text-emerald-600">{t.count}+ test panels</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors group-hover:text-emerald-600">
                  View panel <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-emerald-600 px-7 py-3.5 text-sm font-bold text-emerald-700 transition-all duration-300 hover:bg-emerald-600 hover:text-white"
            >
              View All Tests <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-20">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-teal-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 px-6 py-14 sm:px-12 sm:py-16">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
              <ClipboardCheck className="h-4 w-4" /> Simple & Transparent
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              How It Works in 5 Easy Steps
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              From booking to report, the entire journey takes minutes to arrange and
              happens without you ever leaving home.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="absolute left-[60%] top-7 hidden h-0.5 w-[80%] bg-gradient-to-r from-emerald-500/50 to-transparent lg:block" />
                )}
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lift">
                  <s.icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-extrabold text-emerald-700 shadow">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOOK CTA ===== */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <CalendarCheck className="h-4 w-4" /> Book Now
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Book a Collection Slot in Under a Minute
              </h2>
              <p className="mt-4 text-slate-500">
                Fill in your details and our team will confirm your slot instantly. Prefer
                to talk? Call us — we're happy to help.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Free doorstep pickup within 24 hours',
                  'Sampling specialists visit at your chosen time',
                  'Reports emailed straight to you'
                ].map((t) => (
                  <p key={t} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" /> {t}
                  </p>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card sm:p-9"
            >
              <h3 className="text-lg font-bold text-slate-900">Request Home Collection</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <input required placeholder="Full Name *" className={`${inputClass} sm:col-span-2`} />
                <input required type="tel" placeholder="Mobile Number *" className={inputClass} />
                <input type="email" placeholder="Email" className={inputClass} />
                <select required className={inputClass}>
                  <option value="">Select Test Category *</option>
                  {testCategories.map((t) => (
                    <option key={t.label} value={t.label}>{t.label}</option>
                  ))}
                </select>
                <input type="date" placeholder="Preferred Date" className={inputClass} />
                <select className={`${inputClass} sm:col-span-2`}>
                  <option value="">Preferred Time</option>
                  <option>Morning (7 AM – 11 AM)</option>
                  <option>Noon (11 AM – 2 PM)</option>
                  <option>Afternoon (2 PM – 5 PM)</option>
                  <option>Evening (5 PM – 9 PM)</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 text-sm font-bold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-700 hover:to-teal-700"
              >
                <Syringe className="h-5 w-5" /> Confirm My Booking
              </button>
              <p className="mt-4 text-center text-xs text-slate-400">
                Or call us at{' '}
                <a href="tel:+15550009988" className="font-semibold text-emerald-600">
                  +1 (555) 000-9988
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};