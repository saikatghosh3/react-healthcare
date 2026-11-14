import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import data from '../../../data/chatbotData.json';
import { FaqItem } from '../../../components/Chatbot/chatbotLogic';
import { SectionHeading } from './SectionHeading';

const faqs: FaqItem[] = (data.faqs as FaqItem[])
  .filter((faq) => faq.featured)
  .slice(0, 6);

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16">
          {/* Left: heading + support card */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Frequently Asked"
              highlight="Questions"
              description="Quick answers to the questions we hear most. Can't find what you're looking for? Our assistant and team are ready to help."
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 shadow-lift sm:p-7"
            >
              <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-300 blur-2xl" />
                <div className="absolute -bottom-14 -left-6 h-32 w-32 rounded-full bg-indigo-300 blur-2xl" />
              </div>

              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25">
                  <HelpCircle className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-white">
                  Still have questions?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100">
                  Our team is here to help you every step of the way — from
                  booking to recovery.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-blue-700 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Talk to us
                  </Link>
                  <a
                    href="tel:+12345678900"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-bold text-white ring-1 ring-white/30 transition-all duration-300 hover:bg-white/25"
                  >
                    24/7 Helpline
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-blue-200 bg-blue-50/40 shadow-card'
                      : 'border-slate-100 bg-white hover:border-blue-100'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="text-sm font-bold text-slate-800 sm:text-base">
                      {faq.questions[0] || faq.answer}
                    </span>
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

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-2 text-center text-sm text-slate-500"
            >
              Got a different question?{' '}
              <Link
                to="/contact"
                className="font-bold text-blue-600 hover:text-blue-700"
              >
                Contact us
              </Link>{' '}
              or try our{' '}
              <Link
                to="/"
                className="font-bold text-blue-600 hover:text-blue-700"
              >
                assistant
              </Link>
              .
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};