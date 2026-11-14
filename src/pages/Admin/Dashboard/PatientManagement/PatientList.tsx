import { useState } from 'react';
import { Edit, Trash2, Plus, Search, Users } from 'lucide-react';
import { PatientModal } from './PatientModal';

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
}

export const PatientList = () => {
  const [patients, setPatients] = useState<Patient[]>(() => {
    return JSON.parse(localStorage.getItem('users') || '[]');
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      const updated = patients.filter((patient) => patient.id !== id);
      localStorage.setItem('users', JSON.stringify(updated));
      setPatients(updated);
    }
  };

  const handleSaved = (patient: Patient, isEdit: boolean) => {
    if (isEdit) {
      setPatients((prev) =>
        prev.map((p) => (p.id === patient.id ? patient : p))
      );
    } else {
      setPatients((prev) => [...prev, patient]);
    }
    setIsModalOpen(false);
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
      {/* Card header */}
      <div className="flex flex-col gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Users className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-slate-900">Patient Management</h3>
            <p className="text-xs text-slate-500">
              {patients.length} registered patient{patients.length === 1 ? '' : 's'}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setSelectedPatient(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-2.5 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
        >
          <Plus className="h-4 w-4" />
          Add Patient
        </button>
      </div>

      {/* Search */}
      <div className="px-6 pt-5">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search patients by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border-0 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 ring-1 ring-slate-200 transition-all duration-300 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      {filteredPatients.length === 0 ? (
        <div className="px-6 py-16 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <Users className="h-7 w-7" />
          </span>
          <p className="mt-4 font-bold text-slate-800">No patients found</p>
          <p className="mt-1 text-sm text-slate-500">
            {patients.length === 0
              ? 'Add your first patient to get started.'
              : 'Try adjusting your search to find a patient.'}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto px-6 pb-6 pt-4">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-slate-100 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                <th className="py-3 pr-4">Patient</th>
                <th className="py-3 pr-4">Email</th>
                <th className="hidden py-3 pr-4 sm:table-cell">Phone</th>
                <th className="py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-b border-slate-50 transition-colors last:border-0 hover:bg-slate-50/60"
                >
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-extrabold text-white">
                        {getInitials(patient.name)}
                      </span>
                      <span className="font-bold text-slate-800">
                        {patient.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 pr-4 text-sm text-slate-600">
                    {patient.email}
                  </td>
                  <td className="hidden py-4 pr-4 text-sm text-slate-600 sm:table-cell">
                    {patient.phone}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(patient)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors hover:bg-blue-100"
                        title="Edit patient"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(patient.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors hover:bg-red-100"
                        title="Delete patient"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setIsModalOpen(false)}
          onSaved={handleSaved}
        />
      )}
    </div>
  );
};