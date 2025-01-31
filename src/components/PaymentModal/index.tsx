import React, { useState } from 'react';
import { X, CreditCard, Lock } from 'lucide-react';
import { PaymentForm } from './PaymentForm';
import { PaymentSuccess } from './PaymentSuccess';
import { savePayment } from '../../utils/paymentUtils';
import { saveMedicalRecord } from '../../utils/medicalRecordUtils';

interface PaymentModalProps {
  amount: number;
  serviceDetails: {
    title: string;
    type: string;
  };
  onClose: () => void;
  onSuccess: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ 
  amount, 
  serviceDetails, 
  onClose, 
  onSuccess 
}) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePaymentSuccess = () => {
    // Save payment record
    savePayment({
      amount,
      description: `Payment for ${serviceDetails.title}`,
      serviceDetails
    });

    // Save medical record
    saveMedicalRecord({
      type: 'diagnostic',
      serviceDetails
    });

    setShowSuccess(true);
    setTimeout(() => {
      onSuccess();
      localStorage.removeItem('cart');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            {showSuccess ? (
              <h2 className="text-xl font-bold">Payment Successful</h2>
            ) : (
              <>
                <CreditCard className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-bold">Payment Details</h2>
              </>
            )}
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        {!showSuccess ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Total Amount:</span>
                <span className="text-xl font-bold">${amount.toFixed(2)}</span>
              </div>
              <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                <Lock className="h-4 w-4 mr-2" />
                <span>Secure Payment Processing</span>
              </div>
            </div>
            <PaymentForm onSuccess={handlePaymentSuccess} />
          </>
        ) : (
          <PaymentSuccess />
        )}
      </div>
    </div>
  );
};