import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Doctor, BookingFormData } from '../types';

interface BookingModalProps {
  doctor: Doctor;
  onClose: () => void;
  onSubmit: (formData: BookingFormData) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ doctor, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const appointmentData = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      ...formData,
      status: 'upcoming',
      createdAt: new Date().toISOString()
    };

    // Save appointment
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointments.push({
      id: Date.now().toString(),
      ...appointmentData
    });
    localStorage.setItem('appointments', JSON.stringify(appointments));

    onSubmit(appointmentData);
  };

  const getAvailableSlots = () => {
    if (!formData.date) return [];
    
    const date = new Date(formData.date);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const schedule = doctor.schedule.find(s => s.day === dayOfWeek);
    
    return schedule?.slots || [];
  };

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    // Get next 14 days
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
      
      // Check if doctor works on this day
      if (doctor.schedule.some(s => s.day === dayOfWeek)) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return dates;
  };

  const availableDates = getAvailableDates();
  const availableSlots = getAvailableSlots();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Book Appointment with {doctor.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.patientEmail}
              onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.patientPhone}
              onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <select
              value={formData.date}
              onChange={(e) => {
                setFormData({ 
                  ...formData, 
                  date: e.target.value,
                  time: '' // Reset time when date changes
                });
              }}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Choose a date</option>
              {availableDates.map((date) => (
                <option key={date.value} value={date.value}>
                  {date.label}
                </option>
              ))}
            </select>
          </div>

          {/* Time Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Time
            </label>
            <select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
              disabled={!formData.date}
            >
              <option value="">Choose a time</option>
              {availableSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Reason for Visit */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Visit
            </label>
            <textarea
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              rows={3}
              required
              placeholder="Please describe your reason for visiting"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

