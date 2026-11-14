import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, ShieldCheck, Info } from 'lucide-react';

const inputClass =
  'w-full rounded-xl border-0 bg-slate-50 px-11 py-3 text-sm text-slate-800 ring-1 ring-slate-200 transition-all duration-300 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500';
const labelClass = 'mb-1.5 block text-sm font-semibold text-slate-700';

export const AdminLoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    setIsSubmitting(true);
    window.setTimeout(() => {
      if (
        formData.username === 'Admin' &&
        formData.password === 'admin123'
      ) {
        localStorage.setItem('isAdminAuthenticated', 'true');
        navigate('/admin/dashboard');
      } else {
        setError('Invalid credentials. Please check and try again.');
        setIsSubmitting(false);
      }
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>Username</label>
        <div className="relative">
          <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className={inputClass}
            placeholder="Enter admin username"
            required
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Password</label>
        <div className="relative">
          <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className={inputClass}
            placeholder="Enter admin password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 py-3.5 text-sm font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Signing in...
          </>
        ) : (
          <>
            <ShieldCheck className="h-4 w-4" />
            Sign in as Admin
          </>
        )}
      </button>

      <div className="flex items-start gap-2.5 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
        <p className="text-xs leading-relaxed text-blue-800">
          <span className="font-bold">Demo credentials:</span> Username –{' '}
          <code className="rounded bg-white px-1.5 py-0.5 font-bold">
            Admin
          </code>{' '}
          · Password –{' '}
          <code className="rounded bg-white px-1.5 py-0.5 font-bold">
            admin123
          </code>
        </p>
      </div>
    </form>
  );
};