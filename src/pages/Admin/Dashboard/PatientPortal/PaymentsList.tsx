import React from 'react';
import { DollarSign, Trash2 } from 'lucide-react';
import { getPayments } from '../../../../utils/paymentUtils';

export const PaymentsList = () => {
  const payments = getPayments();

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this payment record?')) {
      const updatedPayments = payments.filter((payment) => payment.id !== id);
      localStorage.setItem('payments', JSON.stringify(updatedPayments));
      window.location.reload();
    }
  };

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

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Patient</th>
              <th className="text-left py-3">Date</th>
              <th className="text-left py-3">Description</th>
              <th className="text-left py-3">Amount</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b hover:bg-gray-50">
                <td className="py-3">{payment.patientName}</td>
                <td className="py-3">{new Date(payment.date).toLocaleDateString()}</td>
                <td className="py-3">{payment.description}</td>
                <td className="py-3">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-600" />
                    <span>{payment.amount.toFixed(2)}</span>
                  </div>
                </td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(payment.status)}`}>
                    {payment.status}
                  </span>
                </td>
                <td className="py-3">
                  <button
                    onClick={() => handleDelete(payment.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};