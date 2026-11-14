import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Heart,
  ArrowLeft,
  Users,
  CalendarCheck,
  FileText,
  CreditCard,
  Activity,
} from 'lucide-react';
import { AdminLoginForm } from './AdminLoginForm';

const features = [
  { icon: Users, title: 'Patient Management', text: 'View and manage all registered patients from a single dashboard.' },
  { icon: CalendarCheck, title: 'Appointment Control', text: 'Monitor schedules, approvals and visit status in real time.' },
  { icon: FileText, title: 'Medical Records', text: 'Access complete records with one-click preview and download.' },
  { icon: CreditCard, title: 'Payment Oversight', text: 'Track billing, payments and outstanding balances effortlessly.' },
];

export const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      {/* Left: branding panel (desktop only) */}
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-500 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />

        <div className="relative">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-card">
              <Heart className="h-6 w-6 text-white" />
            </span>
            <span className="text-2xl font-extrabold text-white">
              Health<span className="text-blue-400">Care</span>
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-14 max-w-md"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
              <ShieldCheck className="h-4 w-4" />
              Staff Access Only
            </span>
            <h1 className="mt-5 text-balance text-3xl font-extrabold leading-snug text-white xl:text-4xl">
              Manage Your Hospital, <span className="text-cyan-300">From Anywhere</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              A powerful admin dashboard to oversee patients, appointments,
              medical records and payments — all in one secure place.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="relative grid gap-4 sm:grid-cols-2"
        >
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-sm font-bold text-white">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{text}</p>
            </div>
          ))}
        </motion.div>

        <div className="relative flex items-center gap-6">
          {[
            { icon: Activity, label: '24/7' },
            { icon: ShieldCheck, label: 'Secure' },
            { icon: Users, label: '10+ Doctors' },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-300"
            >
              <Icon className="h-4 w-4 text-cyan-300" />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Right: form panel */}
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 sm:px-8">
        <div className="w-full max-w-md">
          {/* Mobile branding */}
          <div className="mb-8 flex flex-col items-center text-center lg:hidden">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-card">
              <ShieldCheck className="h-7 w-7 text-white" />
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-slate-900">
              Admin Login
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Sign in to manage your hospital dashboard
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lift"
          >
            {/* Card header (desktop) */}
            <div className="hidden border-b border-slate-100 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 px-8 py-7 lg:block">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20">
                <ShieldCheck className="h-6 w-6 text-cyan-300" />
              </span>
              <h2 className="mt-4 text-xl font-extrabold text-white">Admin Login</h2>
              <p className="mt-1 text-sm text-slate-300">
                Sign in to manage your hospital dashboard
              </p>
            </div>

            <div className="px-6 py-7 sm:px-8">
              <AdminLoginForm />
            </div>
          </motion.div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Need to return to the website?{' '}
            <Link
              to="/"
              className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};