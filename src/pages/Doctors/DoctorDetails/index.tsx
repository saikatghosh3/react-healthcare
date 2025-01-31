import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';
import { doctors } from '../data/doctorsData';
import { AvailabilityCalendar } from './AvailabilityCalendar';

export const DoctorDetails = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find(d => d.id === doctorId);

  if (!doctor) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Doctor not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/doctors')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Doctors
        </button>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Doctor Info */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-2">{doctor.name}</h1>
                <p className="text-blue-600 font-semibold mb-4">{doctor.specialty}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-3 text-blue-600" />
                    <div>
                      <p className="font-semibold">Emergency Contact</p>
                      <a href={`tel:+1${doctor.emergencyContact}`} className="text-blue-600 hover:underline">
                        +1 {doctor.emergencyContact}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-3 text-blue-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href={`mailto:${doctor.email}`} className="text-blue-600 hover:underline">
                        {doctor.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                    <div>
                      <p className="font-semibold">Office Location</p>
                      <p>{doctor.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Calendar */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6">Availability for Next 15 Days</h2>
              <AvailabilityCalendar schedule={doctor.schedule} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};