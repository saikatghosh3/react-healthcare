import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Loader = ({ fullScreen = false }: { fullScreen?: boolean }) => {
  const content = (
    <div
      className={`flex flex-col items-center justify-center gap-6 ${
        fullScreen ? 'min-h-screen bg-slate-950' : 'min-h-[60vh] bg-white'
      }`}
    >
      {/* Pulsing heart */}
      <div className="relative">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lift"
        >
          <Heart className="h-8 w-8 fill-white text-white" />
        </motion.div>
        <motion.span
          animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeOut' }}
          className="absolute inset-0 rounded-2xl bg-blue-500/40"
        />
      </div>

      {/* ECG heartbeat line */}
      <div className="relative h-12 w-56 overflow-hidden sm:w-64">
        <svg
          viewBox="0 0 240 48"
          className="h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 24 H70 L82 24 L90 8 L100 40 L110 16 L118 24 H140 L148 24 L156 12 L166 36 L174 24 H240"
            stroke="url(#loaderGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="420"
            strokeDashoffset="420"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="420;0;0;-420"
              keyTimes="0;0.55;0.75;1"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient
              id="loaderGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand + status text */}
      <div className="text-center">
        <p className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
          Health<span className="text-blue-600">Care</span>
        </p>
        <div className="mt-2 flex items-center justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
              className="h-1.5 w-1.5 rounded-full bg-blue-600"
            />
          ))}
          <span className="ml-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Loading
          </span>
        </div>
      </div>
    </div>
  );

  if (fullScreen) {
    return <div className="h-full w-full">{content}</div>;
  }

  return content;
};
