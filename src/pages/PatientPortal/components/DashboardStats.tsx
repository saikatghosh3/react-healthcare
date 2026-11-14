import { CalendarCheck, FileText, CreditCard, ClipboardCheck } from 'lucide-react';

interface Appointment {
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  status: string;
}

export const DashboardStats = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const appointments: Appointment[] = JSON.parse(
    localStorage.getItem('appointments') || '[]'
  );
  const records: Array<{ id: string; patientId: string }> = JSON.parse(
    localStorage.getItem('medicalRecords') || '[]'
  );
  const payments: Array<{ patientId: string; amount: number; status: string }> =
    JSON.parse(localStorage.getItem('payments') || '[]');

  const userAppointments = currentUser?.email
    ? appointments.filter(
        (appointment) =>
          appointment.patientEmail === currentUser.email ||
          appointment.patientPhone === currentUser.phone
      )
    : appointments;

  const upcoming = userAppointments.filter(
    (appointment) => appointment.status !== 'cancelled'
  ).length;

  const completed = userAppointments.filter(
    (appointment) => appointment.status === 'completed'
  ).length;

  const myRecords = currentUser?.id
    ? records.filter((record) => record.patientId === currentUser.id)
    : records;

  const myPayments = currentUser?.id
    ? payments.filter((payment) => payment.patientId === currentUser.id)
    : payments;

  const paidTotal = myPayments
    .filter((payment) => payment.status === 'paid')
    .reduce((sum, payment) => sum + payment.amount, 0);

  const stats = [
    {
      icon: CalendarCheck,
      label: 'Appointments',
      value: String(upcoming),
      hint: 'Scheduled visits',
      color: 'from-blue-500 to-indigo-600',
      soft: 'bg-blue-50 text-blue-600',
    },
    {
      icon: ClipboardCheck,
      label: 'Completed',
      value: String(completed),
      hint: 'Past visits',
      color: 'from-emerald-500 to-teal-600',
      soft: 'bg-emerald-50 text-emerald-600',
    },
    {
      icon: FileText,
      label: 'Medical Records',
      value: String(myRecords.length),
      hint: 'Reports & records',
      color: 'from-violet-500 to-purple-600',
      soft: 'bg-violet-50 text-violet-600',
    },
    {
      icon: CreditCard,
      label: 'Total Paid',
      value: `$${paidTotal.toFixed(0)}`,
      hint: 'All payments',
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
          </div>
          <p className="mt-4 text-2xl font-extrabold text-slate-900">{value}</p>
          <p className="mt-0.5 text-sm font-bold text-slate-700">{label}</p>
          <p className="text-xs text-slate-400">{hint}</p>
        </div>
      ))}
    </div>
  );
};