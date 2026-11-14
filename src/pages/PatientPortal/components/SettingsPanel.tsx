import { useState, type FormEvent } from 'react';
import {
  User,
  Mail,
  Phone,
  Lock,
  Save,
  ShieldCheck,
  Bell,
  CheckCircle2,
} from 'lucide-react';

interface ProfileForm {
  name: string;
  email: string;
  phone: string;
}

const inputClass =
  'w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm text-slate-800 ring-1 ring-slate-200 transition-all duration-300 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500';
const labelClass = 'mb-1.5 block text-sm font-semibold text-slate-700';

export const SettingsPanel = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  const [profile, setProfile] = useState<ProfileForm>({
    name: currentUser.name ?? '',
    email: currentUser.email ?? '',
    phone: currentUser.phone ?? '',
  });
  const [passwords, setPasswords] = useState({
    current: '',
    next: '',
    confirm: '',
  });
  const [saved, setSaved] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState('');

  const handleProfileSubmit = (e: FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUser = { ...currentUser, ...profile };
    const updatedUsers = users.map((user: { id?: string }) =>
      user.id === currentUser.id ? updatedUser : user
    );

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  };

  const handlePasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPasswordMessage('');

    if (passwords.next.length < 6) {
      setPasswordMessage('New password must be at least 6 characters long.');
      return;
    }
    if (passwords.next !== passwords.confirm) {
      setPasswordMessage('New passwords do not match.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map((user: { id?: string; password?: string }) =>
      user.id === currentUser.id ? { ...user, password: passwords.next } : user
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setPasswords({ current: '', next: '', confirm: '' });
    setPasswordMessage('Password updated successfully.');
  };

  return (
    <div className="grid gap-6">
      {/* Profile */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/60 px-6 py-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <User className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-slate-900">Profile Details</h3>
            <p className="text-xs text-slate-500">
              Keep your personal information up to date.
            </p>
          </div>
        </div>

        <form onSubmit={handleProfileSubmit} className="px-6 py-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                  className={`${inputClass} pl-10`}
                  required
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  className={`${inputClass} pl-10`}
                  required
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  className={`${inputClass} pl-10`}
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
            {saved && (
              <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
                Profile updated!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Security */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/60 px-6 py-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-slate-900">Security</h3>
            <p className="text-xs text-slate-500">
              Change your password to keep your account safe.
            </p>
          </div>
        </div>

        <form onSubmit={handlePasswordSubmit} className="px-6 py-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className={labelClass}>Current Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={passwords.current}
                  onChange={(e) =>
                    setPasswords({ ...passwords, current: e.target.value })
                  }
                  className={`${inputClass} pl-10`}
                  required
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>New Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={passwords.next}
                  onChange={(e) =>
                    setPasswords({ ...passwords, next: e.target.value })
                  }
                  className={`${inputClass} pl-10`}
                  required
                  minLength={6}
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={passwords.confirm}
                  onChange={(e) =>
                    setPasswords({ ...passwords, confirm: e.target.value })
                  }
                  className={`${inputClass} pl-10`}
                  required
                  minLength={6}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <Lock className="h-4 w-4" />
              Update Password
            </button>
            {passwordMessage && (
              <span
                className={`text-sm font-bold ${
                  passwordMessage.startsWith('Password updated')
                    ? 'text-emerald-600'
                    : 'text-red-600'
                }`}
              >
                {passwordMessage}
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Preferences */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/60 px-6 py-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            <Bell className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-extrabold text-slate-900">Preferences</h3>
            <p className="text-xs text-slate-500">
              Manage how you receive updates from HealthCare.
            </p>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {[
            {
              title: 'Appointment reminders',
              desc: 'Get notified before your upcoming visits.',
              default: true,
            },
            {
              title: 'Report notifications',
              desc: 'Be alerted when your test reports are ready.',
              default: true,
            },
            {
              title: 'Health tips & newsletters',
              desc: 'Receive wellness content from our team.',
              default: false,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between gap-4 px-6 py-4"
            >
              <div>
                <p className="font-bold text-slate-800">{item.title}</p>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
              <button
                type="button"
                aria-pressed={item.default}
                className="relative h-6 w-11 shrink-0 rounded-full bg-emerald-400 transition-colors"
                aria-label={item.title}
              >
                <span className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
