import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

interface DiagnosticServicesSliderProps {
  services: Array<{
    title: string;
    description: string;
    price: string;
    image: string;
    link: string;
    tests?: string[];
  }>;
}

export const DiagnosticServicesSlider: React.FC<DiagnosticServicesSliderProps> = ({ services }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-blue-600" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-blue-600" />
      </button>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 py-4 px-8"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {services.map((service) => (
          <div
            key={service.title}
            className="flex-none w-[350px] snap-start"
          >
            <ServiceCard {...service} isDiagnostic={true} />
          </div>
        ))}
      </div>
    </div>
  );
};