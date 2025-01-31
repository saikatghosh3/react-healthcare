import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  doctorName: string;
  date: string;
  time: string;
  reason: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export const AppointmentsList = () => {
  // Get appointments from localStorage
  const appointments: Appointment[] = JSON.parse(localStorage.getItem('appointments') || '[]');

  // Sort appointments by date (most recent first)
  const sortedAppointments = [...appointments].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (sortedAppointments.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Your Appointments</h2>
        <p className="text-gray-600 text-center py-4">No appointments scheduled yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Your Appointments</h2>
      <div className="space-y-4">
        {sortedAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border rounded-lg p-4 hover:border-blue-500 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">{appointment.doctorName}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(appointment.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{appointment.time}</span>
                </div>
                <div className="mt-2 text-gray-600">
                  <strong>Reason:</strong> {appointment.reason}
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                appointment.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                'bg-red-100 text-red-800'
              }`}>
                {appointment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};