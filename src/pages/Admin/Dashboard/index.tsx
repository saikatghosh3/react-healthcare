import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Layout,
  Users,
  Calendar,
  FileText,
  CreditCard,
  LogOut,
  HelpCircle,
  ShieldCheck,
  HeartPulse,
  UserCog,
  MessageCircle,
} from 'lucide-react';
import { useAdminAuth } from '../../../hooks/useAdminAuth';
import { useNavigate } from 'react-router-dom';
import { PatientList } from './PatientManagement/PatientList';
import { AppointmentsList } from './PatientPortal/AppointmentsList';
import { MedicalRecordsList } from './PatientPortal/MedicalRecordsList';
import { PaymentsList } from './PatientPortal/PaymentsList';
import { AdminStats } from './AdminStats';

const tabs = [
  { id: 'overview', label: 'Overview', icon: Layout },
  { id: 'patients', label: 'Patients', icon: Users },
  { id: 'appointments', label: 'Appointments', icon: Calendar },
  { id: 'records', label: 'Medical Records', icon: FileText },
  { id: 'payments', label: 'Payments', icon: CreditCard },
];

const tabTitles: Record<string, { title: string; subtitle: string }> = {
  overview: {
    title: 'Overview',
    subtitle: 'A quick snapshot of your hospital activity at a glance.',
  },
  patients: {
    title: 'Patient Management',
    subtitle: 'Add, edit and manage registered patients from one place.',
  },
  appointments: {
    title: 'Patient Appointments',
    subtitle: 'Review and manage every upcoming and past appointment.',
  },
  records: {
    title: 'Medical Records',
    subtitle: 'Browse, preview and share patient medical reports.',
  },
  payments: {
    title: 'Payments',
    subtitle: 'Track billing history and payment status.',
  },
};

export const AdminDashboard = () => {
  const { isAdminAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  if (!isAdminAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin/login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <AdminStats />
            <div className="grid gap-6 xl:grid-cols-2">
              <AppointmentsList />
              <PaymentsList />
            </div>
          </>
        );
      case 'patients':
        return <PatientList />;
      case 'appointments':
        return <AppointmentsList />;
      case 'records':
        return <MedicalRecordsList />;
      case 'payments':
        return <PaymentsList />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Header banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-10">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-indigo-500 blur-3xl" />
        </div>
        <div className="relative container mx-auto flex flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20">
              <HeartPulse className="h-7 w-7 text-cyan-300" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Admin Control Center
              </p>
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                HealthCare Admin
              </h1>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold text-emerald-300">
            <ShieldCheck className="h-4 w-4" />
            Administrator
          </span>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-[8.5rem] lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
              {/* Profile card */}
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15 ring-2 ring-white/30">
                  <UserCog className="h-8 w-8 text-white" />
                </div>
                <h2 className="mt-3 truncate text-base font-bold text-white">
                  Admin Officer
                </h2>
                <p className="truncate text-xs font-medium text-blue-100">
                  admin@healthcare.com
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-400/20 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-emerald-200">
                  <ShieldCheck className="h-3 w-3" />
                  Super Admin
                </p>
              </div>

              {/* Nav */}
              <nav className="space-y-1 p-3">
                {tabs.map(({ id, label, icon: Icon }) => {
                  const active = activeTab === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id)}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                        active
                          ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm ring-1 ring-blue-100'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                          active
                            ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      {label}
                      {active && (
                        <motion.span
                          layoutId="admin-active-dot"
                          className="ml-auto h-2 w-2 rounded-full bg-blue-600"
                        />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Support card */}
              <div className="m-3 mt-0 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                <HelpCircle className="h-6 w-6 text-blue-600" />
                <p className="mt-2 text-sm font-bold text-slate-900">
                  Need help?
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Our IT support team is available around the clock.
                </p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-700"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Contact support
                </Link>
              </div>

              <div className="p-3 pt-0">
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-100 px-4 py-3 text-sm font-bold text-red-600 transition-colors hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="min-w-0">
            {/* Mobile tab bar */}
            <div className="mb-6 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] lg:hidden">
              {tabs.map(({ id, label, icon: Icon }) => {
                const active = activeTab === id;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                      active
                        ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-card'
                        : 'bg-white text-slate-600 ring-1 ring-slate-200'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {tabTitles[activeTab].title}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {tabTitles[activeTab].subtitle}
              </p>
            </div>

            <AnimatedPanel key={activeTab}>{renderContent()}</AnimatedPanel>
          </main>
        </div>
      </div>
    </div>
  );
};

const AnimatedPanel = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};