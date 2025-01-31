import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Heart, Activity, Users, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Testimonials } from './Home/components/Testimonials';
import { ChatbotWindow } from '../components/Chatbot/ChatbotWindow';
import { BodyMap } from '../components/BodyMap';

export const Home = () => {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.benefit-card', {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: benefitsRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });
  });

  return (
    <div>
      {/* Hero Section */}
      {/* <section ref={heroRef} className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Your Health, Our Priority</h1>
            <p className="text-xl mb-8">
              Experience world-class healthcare with our team of expert medical professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* another code  */}

      <section
  ref={heroRef}
  className="relative overflow-hidden bg-gradient-to-r from-purple-400 to-indigo-500 text-white py-20"
>
  {/* Animated Background Glow */}
  <div className="absolute inset-0 bg-blue-700 opacity-30 blur-3xl animate-pulse"></div>

  <div className="relative container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      {/* Animated Heading */}
      <h1
        className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-300 to-gray-100 text-transparent bg-clip-text animate-fadeInUp"
      >
        Your Health, Our Priority
      </h1>

      {/* Smooth Fade-in Paragraph */}
      <p className="text-xl mb-8 text-gray-200 opacity-0 animate-fadeInUp animation-delay-200">
        Experience world-class healthcare with our team of expert medical professionals.
      </p>

      {/* Button with Glow Effect */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/services"
          className="bg-blue-500 text-white px-8 py-3 rounded-full transition-all shadow-md hover:shadow-blue-400/50 hover:scale-105 hover:bg-blue-600 inline-flex items-center justify-center"
        >
          Our Services <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Body Map Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Interactive Body Map</h2>
          <BodyMap />
        </div>
      </section> */}

      {/* Testimonials Section */}
      <Testimonials />

      {/* Chatbot */}
      <ChatbotWindow />
    </div>
  );
};