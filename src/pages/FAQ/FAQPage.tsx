import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Stethoscope,
  CalendarCheck,
  UserRound,
  HeartPulse,
  Video,
  Truck,
  LayoutDashboard,
  CreditCard,
  Phone,
  ClipboardList,
  Compass,
} from 'lucide-react';
import data from '../../data/chatbotData.json';
import { FaqItem } from '../../components/Chatbot/chatbotLogic';

const faqs = data.faqs as FaqItem[];

const categoryMeta: Record<
  string,
  { label: string; icon: typeof Stethoscope }
> = {
  general: { label: 'About', icon: Stethoscope },
  appointments: { label: 'Appointments', icon: CalendarCheck },
  doctors: { label: 'Doctors', icon: UserRound },
  services: { label: 'Services', icon: HeartPulse },
  emergency: { label: 'Emergency', icon: Phone },
  video: { label: 'Video Consultation', icon: Video },
  'home-collection': { label: 'Home Collection', icon: Truck },
  portal: { label: 'Patient Portal', icon: LayoutDashboard },
  payment: { label: 'Payments', icon: CreditCard },
  contact: { label: 'Contact', icon: Phone },
  feedback: { label: 'Feedback', icon: ClipboardList },
  navigation: { label: 'Site Help', icon: Compass },
};

const categories = ['all', ...Object.keys(categoryMeta)];

export const FAQPage = () => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((faq) => {
      const inCategory =
        activeCategory === 'all' || faq.category === activeCategory;
      if (!inCategory) return false;
      if (!q) return true;

      const haystack = [
        ...faq.questions,
        ...faq.keywords,
        faq.answer,
        categoryMeta[faq.category]?.label ?? faq.category,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [query, activeCategory]);

  const handleOpen = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-500 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />

        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
            <HelpCircle className="h-4 w-4" />
            Help Center
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-snug text-white sm:text-4xl">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Everything you need to know about appointments, doctors, services,
            payments and more — all in one place.
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3.5 backdrop-blur transition-all focus-within:border-blue-400/60 focus-within:bg-white/15">
              <Search className="h-5 w-5 shrink-0 text-cyan-300" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions (e.g. appointment, payment, emergency)..."
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <div className="sticky top-[7.25rem] z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur md:top-[7.5rem]">
        <div className="container mx-auto flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none]">
          {categories.map((category) => {
            const meta = categoryMeta[category];
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-card'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {meta && <meta.icon className="h-4 w-4" />}
                {meta ? meta.label : 'All Questions'}
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ list */}
      <section className="container mx-auto px-4 py-12">
        {filteredFaqs.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-card">
            <Search className="mx-auto h-10 w-10 text-slate-300" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No answers found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try a different keyword or browse another category. You can also
              contact our team or ask the chat assistant.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setQuery('');
                  setActiveCategory('all');
                }}
                className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-700"
              >
                Clear filters
              </button>
              <Link
                to="/contact"
                className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Contact us
              </Link>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl space-y-3">
            <p className="px-1 text-sm text-slate-500">
              Showing <span className="font-bold text-slate-800">{filteredFaqs.length}</span>{' '}
              {filteredFaqs.length === 1 ? 'answer' : 'answers'}
              {activeCategory !== 'all'
                ? ` in ${categoryMeta[activeCategory]?.label}`
                : ''}
              {query ? ` for "${query.trim()}"` : ''}
            </p>

            {filteredFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.03 } }}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-blue-200 bg-white shadow-card'
                      : 'border-slate-100 bg-white hover:border-blue-100'
                  }`}
                >
                  <button
                    onClick={() => handleOpen(i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {(() => {
                          const Meta = categoryMeta[faq.category]?.icon ?? HelpCircle;
                          return <Meta className="h-4 w-4" />;
                        })()}
                      </span>
                      <span className="text-sm font-bold text-slate-800 sm:text-base">
                        {faq.questions[0] || faq.answer}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <p className="whitespace-pre-line px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">
                          {faq.answer}
                          {faq.link && faq.linkLabel && (
                            <Link
                              to={faq.link}
                              className="mt-2 inline-flex items-center font-bold text-blue-600 hover:text-blue-700"
                            >
                              {faq.linkLabel} →
                            </Link>
                          )}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            <div className="!mt-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-center">
              <MessageCircle className="mx-auto h-8 w-8 text-blue-600" />
              <h3 className="mt-3 font-bold text-slate-900">
                Couldn't find what you were looking for?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Our team is ready to help you with any question or concern.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact us
                </Link>
                <a
                  href="tel:+12345678900"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};