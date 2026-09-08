import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import { SectionHeading } from '../../Home/components/SectionHeading';

interface ServiceSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  services: Array<{
    title: string;
    description: string;
    price: string;
    image: string;
    link: string;
    tests?: string[];
  }>;
  bg?: 'white' | 'gray';
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  id,
  eyebrow,
  title,
  highlight,
  description,
  services,
  bg = 'white',
}) => {
  return (
    <section
      id={id}
      className={`scroll-mt-32 ${
        bg === 'gray' ? 'bg-gray-50' : 'bg-white'
      } py-20 lg:py-24`}
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          description={description}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};