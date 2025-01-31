import React from 'react';
import { CreditCard, DollarSign } from 'lucide-react';
import { getPatientPayments } from '../../../utils/paymentUtils';

export const PaymentHistory = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const payments = getPatientPayments(currentUser.id);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (payments.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <p className="text-gray-600 text-center py-4">No payment history available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Payment History</h2>
      <div className="space-y-4">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="border rounded-lg p-4 hover:border-blue-500 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">{payment.description}</span>
                </div>
                <div className="text-gray-600">
                  {new Date(payment.date).toLocaleDateString()}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-gray-600" />
                  <span className="font-semibold">{payment.amount.toFixed(2)}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(payment.status)}`}>
                  {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};