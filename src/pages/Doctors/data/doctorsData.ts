import { Doctor } from '../types';

export const doctors: Doctor[] = [
  // Cardiologists
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
    qualifications: ["MD", "FACC", "PhD in Cardiovascular Medicine"],
    experience: "15+ years",
    languages: ["English", "Spanish"],
    schedule: [
      { day: "Monday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Wednesday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Friday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] }
    ],
    rating: 4.9,
    reviews: 128
  },
  {
    id: "2",
    name: "Dr. Robert Martinez",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
    qualifications: ["MD", "FACC", "Interventional Cardiology"],
    experience: "20+ years",
    languages: ["English", "Spanish"],
    schedule: [
      { day: "Tuesday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Thursday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] }
    ],
    rating: 4.8,
    reviews: 156
  },

  // Neurologists
  {
    id: "3",
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    qualifications: ["MD", "PhD in Neuroscience", "Board Certified"],
    experience: "12+ years",
    languages: ["English", "Mandarin"],
    schedule: [
      { day: "Tuesday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Thursday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Saturday", slots: ["09:00", "10:00", "11:00"] }
    ],
    rating: 4.8,
    reviews: 95
  },
  {
    id: "4",
    name: "Dr. Lisa Anderson",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    qualifications: ["MD", "Neurology Specialist", "Movement Disorders"],
    experience: "18+ years",
    languages: ["English", "French"],
    schedule: [
      { day: "Monday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Wednesday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] }
    ],
    rating: 4.9,
    reviews: 112
  },

  // Pediatricians
  {
    id: "5",
    name: "Dr. Emily Williams",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    qualifications: ["MD", "FAAP", "Child Healthcare Specialist"],
    experience: "10+ years",
    languages: ["English", "French"],
    schedule: [
      { day: "Monday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Tuesday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Thursday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] }
    ],
    rating: 4.9,
    reviews: 156
  },
  {
    id: "6",
    name: "Dr. James Wilson",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    qualifications: ["MD", "FAAP", "Pediatric Emergency"],
    experience: "15+ years",
    languages: ["English"],
    schedule: [
      { day: "Wednesday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Friday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] }
    ],
    rating: 4.7,
    reviews: 89
  },

  // Orthopedics
  {
    id: "7",
    name: "Dr. David Thompson",
    specialty: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=400",
    qualifications: ["MD", "FAAOS", "Sports Medicine"],
    experience: "20+ years",
    languages: ["English"],
    schedule: [
      { day: "Monday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Thursday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] }
    ],
    rating: 4.9,
    reviews: 178
  },
  {
    id: "8",
    name: "Dr. Maria Rodriguez",
    specialty: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    qualifications: ["MD", "FAAOS", "Joint Replacement"],
    experience: "16+ years",
    languages: ["English", "Spanish"],
    schedule: [
      { day: "Tuesday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Friday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] }
    ],
    rating: 4.8,
    reviews: 145
  },

  // Dermatologists
  {
    id: "9",
    name: "Dr. Rachel Kim",
    specialty: "Dermatologist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    qualifications: ["MD", "FAAD", "Cosmetic Dermatology"],
    experience: "12+ years",
    languages: ["English", "Korean"],
    schedule: [
      { day: "Monday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Wednesday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] }
    ],
    rating: 4.9,
    reviews: 203
  },
  {
    id: "10",
    name: "Dr. Thomas Brown",
    specialty: "Dermatologist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    qualifications: ["MD", "FAAD", "Skin Cancer Specialist"],
    experience: "14+ years",
    languages: ["English"],
    schedule: [
      { day: "Tuesday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] },
      { day: "Thursday", slots: ["09:00", "10:00", "11:00", "14:00", "15:00"] }
    ],
    rating: 4.7,
    reviews: 167
  }
];