import React from 'react';
import { Calendar, FileText, CreditCard, Bell } from 'lucide-react';

export const DashboardStats = () => {
  const stats = [
    { icon: Calendar, label: 'Upcoming Appointments', value: '2' },
    { icon: FileText, label: 'Medical Records', value: '8' },
    { icon: CreditCard, label: 'Pending Payments', value: '$150' },
    { icon: Bell, label: 'Notifications', value: '3' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600">{label}</p>
              <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};