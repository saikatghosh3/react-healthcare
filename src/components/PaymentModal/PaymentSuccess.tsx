import React from 'react';
import { CheckCircle } from 'lucide-react';

export const PaymentSuccess = () => {
  return (
    <div className="text-center py-8">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank you!</h2>
      <p className="text-gray-600 mb-4">Your payment was successful</p>
      <div className="animate-pulse text-sm text-gray-500">
        Redirecting...
      </div>
    </div>
  );
};