import React, { useState } from 'react';
import { DoctorsHero } from './components/DoctorsHero';
import { DoctorCard } from './components/DoctorCard';
import { BookingModal } from './components/BookingModal';
import { CategoryTabs } from './components/CategoryTabs';
import { doctors } from './data/doctorsData';
import { BookingFormData } from './types';
import { Search } from 'lucide-react';
import { SuccessModal } from '../../components/SuccessModal';

export const Doctors = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [...new Set(doctors.map(doctor => doctor.specialty))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || doctor.specialty === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBookAppointment = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
  };

  const handleBookingSubmit = (formData: BookingFormData) => {
    setSelectedDoctorId(null);
    setShowSuccess(true);
  };

  return (
    <div>
      <DoctorsHero />
      
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={handleBookAppointment}
            />
          ))}
        </div>

        {/* Booking Modal */}
        {selectedDoctorId && (
          <BookingModal
            doctor={doctors.find(d => d.id === selectedDoctorId)!}
            onClose={() => setSelectedDoctorId(null)}
            onSubmit={handleBookingSubmit}
          />
        )}

        {/* Success Modal */}
        {showSuccess && (
          <SuccessModal
            message="Your appointment has been booked successfully! The confirmation details have been saved."
            onClose={() => setShowSuccess(false)}
          />
        )}
      </div>
    </div>
  );
};