import React, { useState } from 'react';
import { DoctorsHero } from './components/DoctorsHero';
import { DoctorCard } from './components/DoctorCard';
import { BookingModal } from './components/BookingModal';
import { CategoryTabs } from './components/CategoryTabs';
import { doctors } from './data/doctorsData';
import { Search, SearchX, Users, X } from 'lucide-react';
import { SuccessModal } from '../../components/SuccessModal';

export const Doctors = () => {
  const [bookingDoctor, setBookingDoctor] = useState<typeof doctors[number] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [...new Set(doctors.map(doctor => doctor.specialty))];

  const categoryTabs = [
    { name: '', count: doctors.length },
    ...categories.map(category => ({
      name: category,
      count: doctors.filter(doctor => doctor.specialty === category).length,
    })),
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || doctor.specialty === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBookAppointment = (doctorId: string) => {
    setBookingDoctor(doctors.find(doctor => doctor.id === doctorId) ?? null);
  };

  const handleBookingSubmit = () => {
    setBookingDoctor(null);
    setShowSuccess(true);
  };

  return (
    <div>
      <DoctorsHero />

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="mb-10 rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-lg">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border-0 bg-gray-50 py-3.5 pl-12 pr-12 text-slate-700 ring-1 ring-slate-200 transition-all duration-300 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Users className="h-4 w-4" />
              </span>
              Showing {filteredDoctors.length} of {doctors.length} specialists
            </div>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-6">
            <CategoryTabs
              categories={categoryTabs}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onBookAppointment={handleBookAppointment}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-20 text-center shadow-card ring-1 ring-slate-100">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50">
              <SearchX className="h-8 w-8 text-slate-300" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No doctors found
            </h3>
            <p className="mt-1 text-slate-500">
              Try adjusting your search or filter to find the right specialist.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}
              className="mt-6 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-card"
            >
              Reset Filters
            </button>
          </div>
        )}

        {bookingDoctor && (
          <BookingModal
            doctor={bookingDoctor}
            onClose={() => setBookingDoctor(null)}
            onSubmit={handleBookingSubmit}
          />
        )}

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