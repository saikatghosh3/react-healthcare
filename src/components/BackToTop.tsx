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
          className="group fixed bottom-24 left-4 z-40 flex h-12 w-12 flex-col items-center justify-center rounded-full border border-white/80 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white shadow-[0_6px_18px_rgba(37,99,235,0.4)] ring-2 ring-white/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,99,235,0.65)] focus:outline-none focus:ring-4 focus:ring-cyan-200 sm:bottom-6 sm:left-6 sm:h-16 sm:w-16 sm:ring-4"
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
              stroke="rgba(255,255,255,0.28)"
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
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
          </svg>
          <ArrowUp className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-5 sm:w-5" />
          <span className="relative mt-0.5 text-[0.42rem] font-extrabold tracking-[0.12em] text-white/90 sm:text-[0.55rem] sm:tracking-[0.16em]">
            TOP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
