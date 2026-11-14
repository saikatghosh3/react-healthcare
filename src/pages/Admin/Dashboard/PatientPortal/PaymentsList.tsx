import { useState } from 'react';
import { CreditCard, Trash2, DollarSign, Receipt } from 'lucide-react';
import { getPayments } from '../../../../utils/paymentUtils';

interface Payment {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  description: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
}

const statusStyles: Record<Payment['status'], string> = {
  paid: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100',
  pending: 'bg-amber-50 text-amber-700 ring-1 ring-amber-100',
  overdue: 'bg-red-50 text-red-600 ring-1 ring-red-100',
};

export const PaymentsList = () => {
  const [payments, setPayments] = useState<Payment[]>(() => getPayments());

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this payment record?')) {
      const updated = payments.filter((payment) => payment.id !== id);
      localStorage.setItem('payments', JSON.stringify(updated));
      setPayments(updated);
    }
  };

  const totalAmount = payments.reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
      {/* Card header */}
      <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/60 px-6 py-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
          <CreditCard className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-extrabold text-slate-900">Payment History</h3>
          <p className="text-xs text-slate-500">
            ${totalAmount.toFixed(2)} total billing
          </p>
        </div>
      </div>

      {payments.length === 0 ? (
        <div className="px-6 py-14 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <Receipt className="h-7 w-7" />
          </span>
          <p className="mt-4 font-bold text-slate-800">No payments yet</p>
          <p className="mt-1 text-sm text-slate-500">
            Payments made by patients will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-slate-100 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                <th className="px-6 py-3">Patient</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b border-slate-50 transition-colors last:border-0 hover:bg-slate-50/60"
                >
                  <td className="px-6 py-4 font-bold text-slate-800">
                    {payment.patientName}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {new Date(payment.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {payment.description}
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-800">
                    <span className="inline-flex items-center gap-1">
                      <DollarSign className="h-3.5 w-3.5 text-emerald-500" />
                      {payment.amount.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold capitalize ${statusStyles[payment.status]}`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(payment.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors hover:bg-red-100"
                      title="Delete payment"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};