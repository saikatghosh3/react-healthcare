import React from 'react';
import { Star, Quote, BadgeCheck } from 'lucide-react';
import { handleImageError } from '../../../../utils/imageUtils';

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
  date,
}) => {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl bg-white p-7 shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
      {/* Quote icon */}
      <span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
        <Quote className="h-5 w-5 fill-blue-600 text-blue-600" />
      </span>

      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating
                ? 'fill-amber-400 text-amber-400'
                : 'fill-slate-200 text-slate-200'
            }`}
          />
        ))}
      </div>

      <p className="mt-4 flex-1 leading-relaxed text-slate-600">
        "{content}"
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-slate-100" />

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          loading="lazy"
          onError={handleImageError}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-100"
        />
        <div>
          <h3 className="flex items-center gap-1.5 font-bold text-slate-900">
            {name}
            <BadgeCheck className="h-4 w-4 fill-blue-600 text-white" />
          </h3>
          <p className="text-sm text-slate-500">{date} · Verified Patient</p>
        </div>
      </div>
    </div>
  );
};