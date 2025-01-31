import React, { useState } from 'react';
import { Edit, Trash2, Plus, Search } from 'lucide-react';
import { PatientModal } from './PatientModal';
import { usePatients } from '../../../../hooks/usePatients';

export const PatientList = () => {
  const { patients, deletePatient } = usePatients();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (patient: any) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      await deletePatient(id);
    }
  };

  const filteredPatients = patients.filter((patient: any) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Patient Management</h2>
        <button
          onClick={() => {
            setSelectedPatient(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Patient
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search patients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full p-2 border rounded-lg"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Name</th>
              <th className="text-left py-3">Email</th>
              <th className="text-left py-3">Phone</th>
              <th className="text-left py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient: any) => (
              <tr key={patient.id} className="border-b hover:bg-gray-50">
                <td className="py-3">{patient.name}</td>
                <td className="py-3">{patient.email}</td>
                <td className="py-3">{patient.phone}</td>
                <td className="py-3">
                  <button
                    onClick={() => handleEdit(patient)}
                    className="text-blue-600 hover:text-blue-800 mr-3"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(patient.id)}
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

      {isModalOpen && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};