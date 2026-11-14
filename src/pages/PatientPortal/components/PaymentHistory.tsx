import { Link } from 'react-router-dom';
import { CreditCard, Receipt, Calendar, ChevronRight } from 'lucide-react';
import { getPatientPayments } from '../../../utils/paymentUtils';

interface Payment {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  description: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  serviceDetails: {
    title: string;
    type: string;
  };
}

const statusStyles: Record<Payment['status'], string> = {
  paid: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  pending: 'bg-amber-50 text-amber-700 ring-amber-200',
  overdue: 'bg-red-50 text-red-700 ring-red-200',
};

export const PaymentHistory = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const payments: Payment[] = getPatientPayments(currentUser?.id);

  const totalPaid = payments
    .filter((payment) => payment.status === 'paid')
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/60 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <CreditCard className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-slate-900">Payment History</h3>
            <p className="text-xs text-slate-500">
              {payments.length} transaction{payments.length === 1 ? '' : 's'} ·
              ${totalPaid.toFixed(2)} paid
            </p>
          </div>
        </div>
      </div>

      {payments.length === 0 ? (
        <div className="px-6 py-12 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-300">
            <Receipt className="h-7 w-7" />
          </span>
          <p className="mt-4 font-bold text-slate-700">No payments yet</p>
          <p className="mt-1 text-sm text-slate-500">
            Your billing history will appear here once you make a purchase.
          </p>
          <Link
            to="/services"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-700"
          >
            Explore services
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {payments.map((payment) => (
            <div
              key={payment.id}
              className="group flex items-start gap-4 px-6 py-5 transition-colors hover:bg-slate-50/60"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-card">
                <CreditCard className="h-5 w-5" />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-bold text-slate-900">
                    {payment.description}
                  </p>
                  <span className="text-lg font-extrabold text-slate-900">
                    ${payment.amount.toFixed(2)}
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-amber-500" />
                    {new Date(payment.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-bold capitalize ring-1 ${statusStyles[payment.status]}`}
                  >
                    {payment.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};