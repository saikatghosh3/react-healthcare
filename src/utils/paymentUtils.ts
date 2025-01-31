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

export const savePayment = (paymentData: Partial<Payment>): Payment => {
  const payments = JSON.parse(localStorage.getItem('payments') || '[]');
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  
  const newPayment = {
    id: Date.now().toString(),
    patientId: currentUser.id,
    patientName: currentUser.name,
    date: new Date().toISOString(),
    status: 'paid',
    ...paymentData
  } as Payment;
  
  payments.push(newPayment);
  localStorage.setItem('payments', JSON.stringify(payments));
  return newPayment;
};

export const getPayments = (): Payment[] => {
  return JSON.parse(localStorage.getItem('payments') || '[]');
};

export const getPatientPayments = (patientId: string): Payment[] => {
  const payments = getPayments();
  return payments.filter(payment => payment.patientId === patientId);
};