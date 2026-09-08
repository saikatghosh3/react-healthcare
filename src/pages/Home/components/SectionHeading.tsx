import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  light = false,
}) => {
  const alignment =
    align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-3xl mb-12 md:mb-16 ${alignment}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider ${
            light
              ? 'bg-white/10 text-cyan-200'
              : 'bg-blue-50 text-blue-600'
          } mb-4`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight ${
          light ? 'text-white' : 'text-slate-900'
        } text-balance`}
      >
        {title}{' '}
        {highlight && (
          <span className={light ? 'text-cyan-300' : 'text-blue-600'}>
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-blue-100' : 'text-slate-500'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};