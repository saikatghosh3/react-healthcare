import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Layout, Calendar, FileText, CreditCard, Settings } from 'lucide-react';
import { DashboardStats } from './components/DashboardStats';
import { AppointmentsList } from './components/AppointmentsList';
import { MedicalRecords } from './components/MedicalRecords';
import { PaymentHistory } from './components/PaymentHistory';

export const PatientPortal = () => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = React.useState('dashboard');

  // If not authenticated, useAuth will redirect to /auth
  if (!isAuthenticated) {
    return null;
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Layout },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'records', label: 'Medical Records', icon: FileText },
    { id: 'payments', label: 'Payments', icon: CreditCard },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <DashboardStats />
            <div className="grid md:grid-cols-2 gap-6">
              <AppointmentsList />
              <PaymentHistory />
            </div>
          </>
        );
      case 'appointments':
        return <AppointmentsList />;
      case 'records':
        return <MedicalRecords />;
      case 'payments':
        return <PaymentHistory />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Patient Portal</h1>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
        </div>

        <div className="flex space-x-4 mb-8">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {renderContent()}
      </div>
    </div>
  );
};