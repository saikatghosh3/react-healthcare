import { useEffect, useState, type FormEvent } from 'react';
import { X, User, Mail, Phone, Lock, Save, UserPlus } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
}

interface PatientModalProps {
  patient: Patient | null;
  onClose: () => void;
  onSaved: (patient: Patient, isEdit: boolean) => void;
}

const inputClass =
  'w-full rounded-xl border-0 bg-slate-50 px-4 py-3 pl-11 text-sm text-slate-800 ring-1 ring-slate-200 transition-all duration-300 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500';

export const PatientModal: React.FC<PatientModalProps> = ({
  patient,
  onClose,
  onSaved,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (patient) {
      setFormData({
        name: patient.name,
        email: patient.email,
        phone: patient.phone,
        password: patient.password ?? '',
      });
    }
  }, [patient]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const users: Patient[] = JSON.parse(localStorage.getItem('users') || '[]');

    if (!patient) {
      const emailTaken = users.some(
        (user) => user.email.toLowerCase() === formData.email.toLowerCase()
      );
      if (emailTaken) {
        setError('A patient with this email already exists.');
        return;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
      }

      const newPatient: Patient = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };
      users.push(newPatient);
      localStorage.setItem('users', JSON.stringify(users));
      onSaved(newPatient, false);
    } else {
      const updated = users.map((user) =>
        user.id === patient.id ? { ...user, ...formData } : user
      );
      localStorage.setItem('users', JSON.stringify(updated));
      onSaved({ ...patient, ...formData }, true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lift">
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
              {patient ? <User className="h-5 w-5" /> : <UserPlus className="h-5 w-5" />}
            </span>
            <div>
              <h3 className="font-extrabold text-white">
                {patient ? 'Edit Patient' : 'Add Patient'}
              </h3>
              <p className="text-xs text-blue-100">
                {patient
                  ? 'Update the patient account details.'
                  : 'Create a new patient account.'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={inputClass}
                placeholder="e.g. John Doe"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={inputClass}
                placeholder="e.g. john@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Phone
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={inputClass}
                placeholder="e.g. +1 (234) 567-890"
                required
              />
            </div>
          </div>

          {!patient && (
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className={inputClass}
                  placeholder="At least 6 characters"
                  required
                  minLength={6}
                />
              </div>
            </div>
          )}

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 ring-1 ring-red-100">
              {error}
            </p>
          )}

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <Save className="h-4 w-4" />
              {patient ? 'Update Patient' : 'Add Patient'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};