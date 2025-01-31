import React from 'react';
import { Calendar, Clock, Edit, Trash2 } from 'lucide-react';

interface Appointment {
  id: string;
  patientId: string;
  doctorName: string;
  date: string;
  time: string;
  type: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export const AppointmentsList = () => {
  const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      const updatedAppointments = appointments.filter((apt: Appointment) => apt.id !== id);
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
      window.location.reload();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Patient Appointments</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Patient</th>
              <th className="text-left py-3">Doctor</th>
              <th className="text-left py-3">Date</th>
              <th className="text-left py-3">Time</th>
              <th className="text-left py-3">Type</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment: Appointment) => (
              <tr key={appointment.id} className="border-b hover:bg-gray-50">
                <td className="py-3">{appointment.patientId}</td>
                <td className="py-3">{appointment.doctorName}</td>
                <td className="py-3">{new Date(appointment.date).toLocaleDateString()}</td>
                <td className="py-3">{appointment.time}</td>
                <td className="py-3">{appointment.type}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    appointment.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                    appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {appointment.status}
                  </span>
                </td>
                <td className="py-3">
                  <button
                    onClick={() => handleDelete(appointment.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};