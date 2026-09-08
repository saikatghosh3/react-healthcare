import React from 'react';
import {
  Phone,
  Ambulance,
  Clock,
  MapPin,
  AlertTriangle,
  HeartPulse,
  Siren,
  ShieldCheck,
  Stethoscope,
  Bed,
  Droplet,
  Zap,
  Heart,
  ChevronRight,
  CheckCircle2,
  Activity,
  Users,
  LifeBuoy
} from 'lucide-react';

const services = [
  { icon: Ambulance, title: 'Ambulance Service', text: 'Rapid emergency transportation with trained paramedics, advanced life support and GPS dispatch — 24/7.', color: 'from-red-500 to-rose-600' },
  { icon: HeartPulse, title: '24/7 Emergency Care', text: 'Board-certified ER physicians and trauma specialists on site around the clock, every day of the year.', color: 'from-orange-500 to-red-600' },
  { icon: Siren, title: 'Trauma & Critical Care', text: 'State-of-the-art trauma bays, ICU and emergency surgery suites for immediate, life-saving intervention.', color: 'from-rose-500 to-pink-600' },
  { icon: Bed, title: 'Emergency Admission', text: 'Streamlined admission process with dedicated ER beds so critical patients get care without delays.', color: 'from-red-600 to-red-700' },
  { icon: Droplet, title: 'Blood Bank Access', text: 'In-house blood bank with all major groups stocked, ensuring urgent transfusions are always available.', color: 'from-pink-500 to-rose-600' },
  { icon: Stethoscope, title: 'Specialist On Call', text: 'Cardiology, neurology, surgery and more — specialists reach the ER within minutes when needed.', color: 'from-orange-500 to-amber-600' }
];

const whenToCall = [
  'Chest pain, pressure or difficulty breathing',
  'Severe bleeding or deep injuries',
  'Loss of consciousness or fainting',
  'Sudden weakness, numbness or stroke symptoms',
  'Severe allergic reactions or trouble swallowing',
  'Seizures, choking or poisoning'
];

const whileWaiting = [
  'Stay calm and reassure the patient',
  'Keep the person warm and still',
  'Gather medications and medical records',
  'Clear the area around the patient',
  'Send someone outside to guide responders',
  'Do not give food or drink to the patient'
];

const locations = [
  { name: 'Main Campus ER', address: '123 Healthcare Ave', phone: '+1 (234) 567-890' },
  { name: 'North Clinic ER', address: '456 Wellness Blvd', phone: '+1 (234) 567-891' },
  { name: 'South Clinic ER', address: '789 Care Lane', phone: '+1 (234) 567-892' }
];

export const Emergency = () => {
  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      {/* ===== EMERGENCY BANNER ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-rose-700 py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-orange-400 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-rose-400 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />

        <div className="relative container mx-auto flex flex-col items-center gap-8 px-4 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:text-left">
            <span className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-3xl bg-white opacity-20" />
              <AlertTriangle className="relative h-10 w-10 text-white" />
            </span>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                <Zap className="h-4 w-4" /> Emergency Services · 24/7
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                We're Ready When<br />Every Second Counts
              </h1>
              <p className="mt-3 max-w-xl text-red-100">
                Immediate medical care, rapid response and life-saving expertise — available
                around the clock at nine locations across the city.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href="tel:911"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-lg font-extrabold text-red-600 shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-red-600" />
              </span>
              <Phone className="h-6 w-6 text-red-600 transition-transform duration-300 group-hover:rotate-12" />
              <span className="tracking-wide">CALL 911</span>
            </a>
            <p className="text-sm font-semibold text-red-100">Free · Available 24/7 · Everywhere</p>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="container mx-auto px-4">
        <div className="relative z-10 -mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {[
            { icon: Activity, value: '8 min', label: 'Avg. Response Time' },
            { icon: Users, value: '50K+', label: 'Emergencies Handled' },
            { icon: Clock, value: '24/7', label: 'Always Available' },
            { icon: LifeBuoy, value: '9', label: 'ER Locations' }
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-soft">
                <s.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xl font-extrabold text-slate-900 sm:text-2xl">{s.value}</p>
                <p className="text-xs text-slate-500 sm:text-sm">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== EMERGENCY SERVICES ===== */}
      <section className="container mx-auto px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-700">
            <Siren className="h-4 w-4" /> Rapid Response Services
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Comprehensive Emergency Care
          </h2>
          <p className="mt-4 text-slate-500">
            A fully-equipped emergency department, ready to act the moment you arrive.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GUIDELINES ===== */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
              <AlertTriangle className="h-4 w-4" /> Know Before You Go
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Emergency Guidelines
            </h2>
            <p className="mt-4 text-slate-500">
              Quick, life-saving information for emergencies and while help is on the way.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-red-100 bg-red-50/50 p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-soft">
                  <Phone className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">When to Call 911</h3>
              </div>
              <ul className="mt-6 space-y-3.5">
                {whenToCall.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-red-100">
                <Zap className="h-6 w-6 shrink-0 text-red-500" />
                <p className="text-sm font-semibold text-red-700">
                  Not sure? Call 911 anyway. When in doubt, let professionals decide.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-soft">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">What to Do While Waiting</h3>
              </div>
              <ul className="mt-6 space-y-3.5">
                {whileWaiting.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                <Heart className="h-6 w-6 shrink-0 text-blue-500" />
                <p className="text-sm font-semibold text-slate-700">
                  Administer CPR if the person is unresponsive and not breathing normally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATIONS ===== */}
      <section className="container mx-auto px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-700">
            <MapPin className="h-4 w-4" /> Nearest ER
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Emergency Departments Near You
          </h2>
          <p className="mt-4 text-slate-500">
            Multiple locations for the fastest possible access to care.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="group flex flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold text-slate-900">{loc.name}</h3>
              </div>
              <p className="mt-4 text-sm text-slate-500">{loc.address}</p>
              <a
                href={`tel:${loc.phone.replace(/[^+\d]/g, '')}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700"
              >
                <Phone className="h-4 w-4" /> {loc.phone}
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-slate-400 transition-colors group-hover:text-red-600"
              >
                Get Directions <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-16 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 px-6 py-12 text-center shadow-lift sm:px-12">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-red-500 blur-3xl" />
              <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-orange-400 blur-3xl" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-300">
                <HeartPulse className="h-4 w-4" /> Every Minute Matters
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                In an Emergency, Don't Wait — Call Now
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Our dispatch team is standing by 24/7 to send help to your exact location.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="tel:911"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-500 to-rose-600 px-8 py-4 text-lg font-extrabold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:from-red-600 hover:to-rose-700"
                >
                  <Phone className="h-6 w-6" /> CALL 911
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
                >
                  <Ambulance className="h-5 w-5" /> Direct ER Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};