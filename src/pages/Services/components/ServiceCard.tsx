import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { handleImageError } from '../../../utils/imageUtils';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  link: string;
  tests?: string[];
  isDiagnostic?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  image,
  link,
  tests,
  isDiagnostic = false,
}) => {
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({
      id: Date.now(),
      title,
      price,
      type: 'diagnostic',
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
      {/* Image */}
      <Link to={link} className="relative block h-52 overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={title}
          loading="lazy"
          onError={handleImageError}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3.5 py-1.5 text-sm font-bold text-slate-800 shadow backdrop-blur">
          {price}
        </span>
        {isDiagnostic && (
          <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow">
            Health Package
          </span>
        )}
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <Link to={link}>
          <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
            {title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">
          {description}
        </p>

        {tests && tests.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tests.slice(0, 3).map((test) => (
              <span
                key={test}
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                {test}
              </span>
            ))}
            {tests.length > 3 && (
              <span className="px-1 text-xs font-medium text-slate-400">
                +{tests.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-5">
          <Link
            to={link}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          {isDiagnostic && (
            <button
              onClick={handleAddToCart}
              className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white hover:shadow-card"
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};