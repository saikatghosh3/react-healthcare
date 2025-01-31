import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

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
  isDiagnostic = false
}) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({
      id: Date.now(),
      title,
      price,
      type: 'diagnostic'
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {tests && tests.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Includes:</h4>
            <ul className="list-disc pl-5 text-gray-600">
              {tests.map((test, index) => (
                <li key={index}>{test}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-600 font-semibold">{price}</span>
          <div className="space-x-2 flex items-center text-center">
            <Link
              to={link}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
            {isDiagnostic && (
              <button
                onClick={handleAddToCart}
                className="bg-green-600 text-white px-4 py-2  rounded-full hover:bg-green-700 transition-colors flex items-center"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};