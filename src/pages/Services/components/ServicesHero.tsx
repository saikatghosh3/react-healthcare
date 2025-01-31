import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const ServicesHero = () => {
  const heroRef = React.useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });
  });

  return (
    <section ref={heroRef} className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Medical Services</h1>
          <p className="text-xl">
            Comprehensive healthcare solutions tailored to your needs with cutting-edge technology and expert care.
          </p>
        </div>
      </div>
    </section>
  );
};