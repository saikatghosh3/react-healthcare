import React from 'react';
import { ServiceCard } from './ServiceCard';

interface ServiceSectionProps {
  title: string;
  description: string;
  services: Array<{
    title: string;
    description: string;
    price: string;
    image: string;
    link: string;
    tests?: string[];
  }>;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  services
}) => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-8 max-w-3xl">{description}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};