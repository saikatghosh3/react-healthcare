export interface Schedule {
  day: string;
  slots: string[];
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  qualifications: string[];
  experience: string;
  languages: string[];
  schedule: Schedule[];
  rating: number;
  reviews: number;
}

export interface BookingFormData {
  doctorId: string;
  date: string;
  slot: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  reason: string;
}