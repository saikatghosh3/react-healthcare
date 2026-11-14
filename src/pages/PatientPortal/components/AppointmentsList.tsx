import { Link } from 'react-router-dom';
import { Calendar, Clock, Stethoscope, CalendarPlus, ChevronRight } from 'lucide-react';

interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  doctorName: string;
  date: string;
  time: string;
  reason: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

const statusStyles: Record<Appointment['status'], string> = {
  upcoming: 'bg-blue-50 text-blue-700 ring-blue-200',
  completed: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  cancelled: 'bg-red-50 text-red-700 ring-red-200',
};

export const AppointmentsList = () => {
  const appointments: Appointment[] = JSON.parse(
    localStorage.getItem('appointments') || '[]'
  );

  const sortedAppointments = [...appointments].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const upcoming = sortedAppointments.filter(
    (appointment) => appointment.status === 'upcoming'
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/60 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Calendar className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-slate-900">Your Appointments</h3>
            <p className="text-xs text-slate-500">
              {upcoming.length} upcoming · {sortedAppointments.length} total
            </p>
          </div>
        </div>
        <Link
          to="/doctors"
          className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-blue-700"
        >
          <CalendarPlus className="h-3.5 w-3.5" />
          Book new
        </Link>
      </div>

      {sortedAppointments.length === 0 ? (
        <div className="px-6 py-12 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-300">
            <Calendar className="h-7 w-7" />
          </span>
          <p className="mt-4 font-bold text-slate-700">No appointments yet</p>
          <p className="mt-1 text-sm text-slate-500">
            Schedule your first visit with one of our specialists.
          </p>
          <Link
            to="/doctors"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-700"
          >
            Find a doctor
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {sortedAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="group flex items-start gap-4 px-6 py-5 transition-colors hover:bg-slate-50/60"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-card">
                <Stethoscope className="h-5 w-5" />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-bold text-slate-900">
                    {appointment.doctorName}
                  </p>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold capitalize ring-1 ${statusStyles[appointment.status]}`}
                  >
                    {appointment.status}
                  </span>
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-blue-500" />
                    {new Date(appointment.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-blue-500" />
                    {appointment.time}
                  </span>
                </div>

                {appointment.reason && (
                  <p className="mt-1.5 truncate text-sm text-slate-500">
                    <span className="font-semibold text-slate-600">Reason:</span>{' '}
                    {appointment.reason}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};