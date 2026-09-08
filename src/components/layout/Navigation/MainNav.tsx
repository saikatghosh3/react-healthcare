import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Heart,
  Menu,
  X,
  Phone,
  Ambulance,
  LogOut,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/contact', label: 'Contact' },
  { to: '/portal', label: 'Patient Portal' },
];

export const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isAuth = localStorage.getItem('isAuthenticated') === 'true';
  const isAdmin = localStorage.getItem('isAdminAuthenticated') === 'true';

  useEffect(() => {
    setIsMenuOpen(false);
    setShowEmergency(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowEmergency(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleLogout = () => {
    if (isAdmin) {
      localStorage.removeItem('isAdminAuthenticated');
      navigate('/admin/login');
    } else {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('currentUser');
      navigate('/auth');
    }
  };

  const navLinkClass =
    'group relative inline-flex items-center px-1 py-2 text-[0.95rem] font-semibold transition-colors duration-300';

  const renderUnderline = (isActive: boolean) =>
    isActive ? (
      <motion.span
        layoutId="nav-underline"
        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
        className="absolute inset-x-1 bottom-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
      />
    ) : (
      <span className="absolute inset-x-1 bottom-0 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
    );

  return (
    <nav className="relative border-b border-slate-100 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-card transition-transform hover:scale-105">
              <Heart className="h-6 w-6 text-white" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-xl font-extrabold leading-none text-slate-900">
                Health<span className="text-blue-600">Care</span>
              </span>
              <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Your Trusted Partner
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 xl:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={navLinkClass}
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? 'font-bold text-blue-700'
                          : 'text-slate-600 group-hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                    </span>
                    {renderUnderline(isActive)}
                  </>
                )}
              </NavLink>
            ))}
            {isAdmin && (
              <NavLink to="/admin/dashboard" className={navLinkClass}>
                {({ isActive }) => (
                  <>
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? 'font-bold text-blue-700'
                          : 'text-slate-600 group-hover:text-blue-600'
                      }`}
                    >
                      Admin Panel
                    </span>
                    {renderUnderline(isActive)}
                  </>
                )}
              </NavLink>
            )}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowEmergency((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-card transition-all hover:bg-red-700 hover:shadow-lift"
              >
                <Ambulance className="h-4 w-4" />
                Emergency
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    showEmergency ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {showEmergency && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lift"
                  >
                    <div className="border-b border-slate-100 bg-red-50/60 px-5 py-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-red-500">
                        Medical emergency?
                      </p>
                      <a
                        href="tel:911"
                        className="mt-1 inline-flex items-center gap-2 text-2xl font-extrabold text-red-600 hover:text-red-700"
                      >
                        <Phone className="h-5 w-5" />
                        911
                      </a>
                    </div>
                    <div className="p-3">
                      <Link
                        to="/emergency"
                        onClick={() => setShowEmergency(false)}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                      >
                        Go to Emergency Page
                        <ChevronDown className="h-4 w-4 -rotate-90" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {isAuth || isAdmin ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-full border border-red-200 px-5 py-2.5 text-sm font-bold text-red-600 transition-all hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            ) : (
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-card transition-all hover:bg-blue-700 hover:shadow-lift"
              >
                <ShieldCheck className="h-4 w-4" />
                Login
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 xl:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-100 bg-white xl:hidden"
          >
            <div className="container mx-auto px-4 py-5">
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl border-l-4 px-4 py-3 text-[0.95rem] font-semibold transition-colors ${
                          isActive
                            ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-transparent text-blue-700'
                            : 'border-transparent text-slate-700 hover:bg-slate-50'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                {isAdmin && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * navItems.length }}
                  >
                    <NavLink
                      to="/admin/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl border-l-4 px-4 py-3 text-[0.95rem] font-semibold transition-colors ${
                          isActive
                            ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-transparent text-blue-700'
                            : 'border-transparent text-slate-700 hover:bg-slate-50'
                        }`
                      }
                    >
                      Admin Panel
                    </NavLink>
                  </motion.div>
                )}
              </div>

              <div className="mt-4 border-t border-slate-100 pt-4">
                <div className="rounded-2xl bg-red-50 px-5 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-red-500">
                        Emergency
                      </p>
                      <a
                        href="tel:911"
                        className="text-xl font-extrabold text-red-600"
                      >
                        911
                      </a>
                    </div>
                    <Link
                      to="/emergency"
                      onClick={() => setIsMenuOpen(false)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-red-700"
                    >
                      <Ambulance className="h-4 w-4" />
                      Emergency Page
                    </Link>
                  </div>
                </div>

                {isAuth || isAdmin ? (
                  <button
                    onClick={handleLogout}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-200"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/auth"
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-card transition-all hover:bg-blue-700"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    Login / Register
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};