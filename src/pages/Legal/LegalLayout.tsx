import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Home, FileText, ChevronRight } from 'lucide-react';

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  icon: typeof ShieldCheck;
  updated: string;
  sections: LegalSection[];
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  updated,
  sections,
}) => {
  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-500 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />

        <div className="relative container mx-auto flex flex-col items-start gap-6 px-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur">
              <Icon className="h-8 w-8 text-cyan-300" />
            </span>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
                <FileText className="h-3.5 w-3.5" />
                {eyebrow}
              </span>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {title}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
                {subtitle}
              </p>
            </div>
          </div>

          <nav className="shrink-0" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <Home className="h-3.5 w-3.5" />
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              </li>
              <li className="text-cyan-300">{eyebrow}</li>
            </ol>
            <p className="mt-2 text-right text-xs text-slate-400">
              Last updated: {updated}
            </p>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card"
        >
          <div className="space-y-4 border-b border-slate-100 bg-blue-50/40 px-6 py-5 sm:px-8">
            {sections.map((section) => (
              <div
                id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                key={section.title}
                className="scroll-mt-40"
              >
                <h2 className="flex items-center gap-2 text-lg font-extrabold text-slate-900">
                  <span className="flex h-6 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600" />
                  {section.title}
                </h2>

                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="mt-3 leading-relaxed text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact card */}
          <div className="bg-slate-50/80 px-6 py-6 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-bold text-slate-900">
                  Questions about this policy?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Our team is happy to explain how we handle your information.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Contact us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};