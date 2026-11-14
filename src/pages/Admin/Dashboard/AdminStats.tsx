import { Users, CalendarCheck, FileText, CreditCard, Database } from 'lucide-react';

export const AdminStats = () => {
  const patients: Array<object> = JSON.parse(localStorage.getItem('users') || '[]');
  const appointments: Array<object> = JSON.parse(
    localStorage.getItem('appointments') || '[]'
  );
  const records: Array<object> = JSON.parse(
    localStorage.getItem('medicalRecords') || '[]'
  );
  const payments: Array<{ patientId: string; amount: number; status: string }> =
    JSON.parse(localStorage.getItem('payments') || '[]');

  const paidTotal = payments
    .filter((payment) => payment.status === 'paid')
    .reduce((sum, payment) => sum + payment.amount, 0);

  const pendingCount = payments.filter((payment) => payment.status === 'pending').length;

  const stats = [
    {
      icon: Users,
      label: 'Registered Patients',
      value: String(patients.length),
      hint: 'All patient accounts',
      color: 'from-blue-500 to-indigo-600',
      soft: 'bg-blue-50 text-blue-600',
    },
    {
      icon: CalendarCheck,
      label: 'Appointments',
      value: String(appointments.length),
      hint: 'Total scheduled visits',
      color: 'from-emerald-500 to-teal-600',
      soft: 'bg-emerald-50 text-emerald-600',
    },
    {
      icon: FileText,
      label: 'Medical Records',
      value: String(records.length),
      hint: 'Reports & records',
      color: 'from-violet-500 to-purple-600',
      soft: 'bg-violet-50 text-violet-600',
    },
    {
      icon: CreditCard,
      label: 'Pending Payments',
      value: String(pendingCount),
      hint: `$${paidTotal.toFixed(0)} collected`,
      color: 'from-amber-500 to-orange-600',
      soft: 'bg-amber-50 text-amber-600',
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map(({ icon: Icon, label, value, hint, color, soft }) => (
        <div
          key={label}
          className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
        >
          <div
            className={`pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${color} opacity-10 blur-xl`}
          />
          <div className="flex items-center justify-between">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${soft}`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <Database className="h-4 w-4 text-slate-200" />
          </div>
          <p className="mt-4 text-2xl font-extrabold text-slate-900">{value}</p>
          <p className="mt-0.5 text-sm font-bold text-slate-700">{label}</p>
          <p className="text-xs text-slate-400">{hint}</p>
        </div>
      ))}
    </div>
  );
};