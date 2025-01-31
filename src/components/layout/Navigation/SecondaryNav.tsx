import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Truck, MessageSquare } from 'lucide-react';

export const SecondaryNav = () => {
  return (
    <div className="bg-gray-100 py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-end space-x-6">
          <Link 
            to="/video-consultation" 
            className="flex items-center text-sm text-gray-600 hover:text-blue-600"
          >
            <Video className="h-4 w-4 mr-1" />
            Video Consultancy
          </Link>
          <Link 
            to="/home-collection" 
            className="flex items-center text-sm text-gray-600 hover:text-blue-600"
          >
            <Truck className="h-4 w-4 mr-1" />
            Sample Collection
          </Link>
          <Link 
            to="/feedback" 
            className="flex items-center text-sm text-gray-600 hover:text-blue-600"
          >
            <MessageSquare className="h-4 w-4 mr-1" />
            Feedback
          </Link>
        </div>
      </div>
    </div>
  );
};