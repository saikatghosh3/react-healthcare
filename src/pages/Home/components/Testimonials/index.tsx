import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from './testimonialData';

export const Testimonials = () => {
  const containerRef = React.useRef(null);

  useGSAP(() => {
    gsap.from('.testimonial-card', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });
  });

  return (
    <section ref={containerRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read about the experiences of our patients and how our dedicated team has helped them on their journey to better health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};