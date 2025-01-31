import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image: string;
  content: string;
  rating: number;
  date: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  content,
  rating,
  date
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-600">{content}</p>
    </div>
  );
};