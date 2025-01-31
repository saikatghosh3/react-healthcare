interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  type: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  createdAt: string;
}

export const saveAppointment = (appointmentData: Partial<Appointment>): Appointment => {
  const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
  const newAppointment = {
    id: Date.now().toString(),
    ...appointmentData,
    status: 'upcoming',
    createdAt: new Date().toISOString()
  } as Appointment;
  
  appointments.push(newAppointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));
  return newAppointment;
};

export const getAppointments = (): Appointment[] => {
  return JSON.parse(localStorage.getItem('appointments') || '[]');
};

export const updateAppointment = (id: string, updates: Partial<Appointment>): Appointment | null => {
  const appointments = getAppointments();
  const index = appointments.findIndex(apt => apt.id === id);
  
  if (index === -1) return null;
  
  appointments[index] = { ...appointments[index], ...updates };
  localStorage.setItem('appointments', JSON.stringify(appointments));
  
  return appointments[index];
};

export const deleteAppointment = (id: string): boolean => {
  const appointments = getAppointments();
  const filteredAppointments = appointments.filter(apt => apt.id !== id);
  
  if (filteredAppointments.length === appointments.length) return false;
  
  localStorage.setItem('appointments', JSON.stringify(filteredAppointments));
  return true;
};