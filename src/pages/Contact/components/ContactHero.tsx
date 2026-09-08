import React from 'react';
import { Phone, Mail, MapPin, Clock, HeartPulse, ArrowUpRight } from 'lucide-react';

export const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-24 -top-20 h-80 w-80 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-500 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />

      <div className="relative container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
              <HeartPulse className="h-4 w-4" /> We're Here 24/7
            </span>
            <h1 className="mt-5 text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Get in Touch With <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Our Care Team</span>
            </h1>
            <p className="mt-4 max-w-lg text-slate-300">
              Questions about appointments, services or your care plan? Reach us any time —
              a real person is always ready to help.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:+1234567890"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-600 hover:to-indigo-600"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="mailto:contact@healthcare.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Phone, label: 'Emergency Line', value: '(911) — 24/7', href: 'tel:911', type: 'tel' },
              { icon: Clock, label: 'Reception Hours', value: 'Mon–Sun · 24 Hours', href: null },
              { icon: MapPin, label: 'Main Campus', value: '123 Healthcare Ave, Medical City', href: 'https://maps.google.com/?q=123+Healthcare+Ave', type: 'map' },
              { icon: Mail, label: 'Email Us', value: 'contact@healthcare.com', href: 'mailto:contact@healthcare.com', type: 'email' }
            ].map((c) => {
              const Tag = c.href ? 'a' : 'div';
              return (
                <Tag
                  key={c.label}
                  href={c.href ?? undefined}
                  target={c.href && !c.href.startsWith('tel') && !c.href.startsWith('mailto') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-soft">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-blue-300">{c.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{c.value}</p>
                  {c.href && (
                    <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Open <ArrowUpRight className="h-3 w-3" />
                    </span>
                  )}
                </Tag>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};