import { useState } from 'react';
import { Calendar, Clock, Trash2, Stethoscope, CalendarX2 } from 'lucide-react';

interface Appointment {
  id: string;
  patientId: string;
  patientName?: string;
  doctorName: string;
  date: string;
  time: string;
  type: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

const statusStyles: Record<Appointment['status'], string> = {
  upcoming:
    'bg-blue-50 text-blue-700 ring-1 ring-blue-100',
  completed:
    'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100',
  cancelled:
    'bg-red-50 text-red-600 ring-1 ring-red-100',
};

export const AppointmentsList = () => {
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    return JSON.parse(localStorage.getItem('appointments') || '[]');
  });

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      const updated = appointments.filter((apt) => apt.id !== id);
      localStorage.setItem('appointments', JSON.stringify(updated));
      setAppointments(updated);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
      {/* Card header */}
      <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/60 px-6 py-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Calendar className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-extrabold text-slate-900">
            Patient Appointments
          </h3>
          <p className="text-xs text-slate-500">
            {appointments.length} total appointment{appointments.length === 1 ? '' : 's'}
          </p>
        </div>
      </div>

      {appointments.length === 0 ? (
        <div className="px-6 py-14 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <CalendarX2 className="h-7 w-7" />
          </span>
          <p className="mt-4 font-bold text-slate-800">No appointments yet</p>
          <p className="mt-1 text-sm text-slate-500">
            Appointments booked by patients will show up here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-slate-100 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                <th className="px-6 py-3">Patient</th>
                <th className="px-6 py-3">Doctor</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Time</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-b border-slate-50 transition-colors last:border-0 hover:bg-slate-50/60"
                >
                  <td className="px-6 py-4 font-bold text-slate-800">
                    {appointment.patientName ?? appointment.patientId}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                      <Stethoscope className="h-3.5 w-3.5 text-blue-500" />
                      {appointment.doctorName}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {new Date(appointment.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      {appointment.time}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {appointment.type}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold capitalize ${statusStyles[appointment.status]}`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(appointment.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors hover:bg-red-100"
                      title="Delete appointment"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};