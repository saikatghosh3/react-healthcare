import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(Math.max(ratio, 0), 1));
      setVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 16 }}
          transition={{ type: 'spring', stiffness: 340, damping: 24 }}
          onClick={scrollTop}
          aria-label="Scroll back to top"
          title="Back to top"
          className="group fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lift transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <circle
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="3"
            />
            <circle
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              stroke="url(#backToTopGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
              style={{ transition: 'stroke-dashoffset 0.15s ease-out' }}
            />
            <defs>
              <linearGradient
                id="backToTopGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
          <ArrowUp className="relative h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
