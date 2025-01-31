import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { 
  specialtiesData, 
  diagnosticsData, 
  preventiveCareData, 
  emergencyData 
} from './data/servicesData';
import { ServiceFeatures } from './components/ServiceFeatures';
import { ServiceFAQs } from './components/ServiceFAQs';

export const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const allServices = [
    ...specialtiesData,
    ...diagnosticsData,
    ...preventiveCareData,
    ...emergencyData
  ];

  const service = allServices.find(s => s.link.split('/').pop() === serviceId);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center">Service not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button
        onClick={() => navigate('/services')}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Services
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-96 object-cover"
        />
        
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800">{service.title}</h1>
            <span className="text-2xl font-semibold text-blue-600">{service.price}</span>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg mb-6">{service.description}</p>
            
            <ServiceFeatures />
            <ServiceFAQs />
          </div>

          <div className="mt-8">
            <button
              onClick={() => navigate('/appointment')}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};