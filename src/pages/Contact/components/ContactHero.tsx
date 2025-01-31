import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const ContactHero = () => {
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
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl">
            Get in touch with our healthcare professionals. We're here to help 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};