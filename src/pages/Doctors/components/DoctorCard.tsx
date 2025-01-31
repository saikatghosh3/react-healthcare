import React from 'react';
import { Star, Clock, Globe, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctorId: string) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookAppointment }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {doctor.specialty}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
          {doctor.name}
        </h3>
        
        <div className="flex items-center mb-4">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-600">{doctor.rating} ({doctor.reviews} reviews)</span>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2 text-blue-600" />
            <span>{doctor.experience} experience</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Globe className="h-5 w-5 mr-2 text-blue-600" />
            <span>{doctor.languages.join(', ')}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-gray-700">Qualifications:</h4>
          <ul className="text-gray-600 space-y-1">
            {doctor.qualifications.map((qual, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                {qual}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-2">
          <Link
            to={`/doctors/${doctor.id}`}
            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Link>
          <button
            onClick={() => onBookAppointment(doctor.id)}
            className="flex-1 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};