import React from 'react';
import { useAdminAuth } from '../../../hooks/useAdminAuth';
import { Users, Calendar, FileText, CreditCard, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PatientList } from './PatientManagement/PatientList';
import { AppointmentsList } from './PatientPortal/AppointmentsList';
import { MedicalRecordsList } from './PatientPortal/MedicalRecordsList';
import { PaymentsList } from './PatientPortal/PaymentsList';

export const AdminDashboard = () => {
  const { isAdminAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('patients');

  if (!isAdminAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin/login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'patients':
        return <PatientList />;
      case 'appointments':
        return <AppointmentsList />;
      case 'records':
        return <MedicalRecordsList />;
      case 'payments':
        return <PaymentsList />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>

        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('patients')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'patients'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users className="h-5 w-5" />
            <span>Patients</span>
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'appointments'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Calendar className="h-5 w-5" />
            <span>Appointments</span>
          </button>
          <button
            onClick={() => setActiveTab('records')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'records'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FileText className="h-5 w-5" />
            <span>Medical Records</span>
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'payments'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <CreditCard className="h-5 w-5" />
            <span>Payments</span>
          </button>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};