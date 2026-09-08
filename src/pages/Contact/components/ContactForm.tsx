import React, { useState } from 'react';
import { Send, CheckCircle2, User, Mail, Phone, BookOpen, MessageSquare } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100';
  const labelClass = 'mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700';

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-11 w-11 text-emerald-600" />
        </span>
        <h3 className="mt-6 text-2xl font-extrabold text-slate-900">Message Sent!</h3>
        <p className="mt-2 max-w-sm text-slate-500">
          Thank you, {formData.name.split(' ')[0] || 'friend'}. Our team will get back to
          you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          }}
          className="mt-8 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card sm:p-9">
      <div className="mb-7">
        <h2 className="text-2xl font-extrabold text-slate-900">Send Us a Message</h2>
        <p className="mt-1 text-sm text-slate-500">
          Fill in the form and we'll respond within one business day.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}><User className="h-4 w-4 text-blue-500" /> Your Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. John Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}><Mail className="h-4 w-4 text-blue-500" /> Email Address</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="abc@xyz.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}><Phone className="h-4 w-4 text-blue-500" /> Phone Number</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}><BookOpen className="h-4 w-4 text-blue-500" /> Subject</label>
          <input
            type="text"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="How can we help?"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}><MessageSquare className="h-4 w-4 text-blue-500" /> Your Message</label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Write your message here..."
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-sm font-bold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700"
      >
        Send Message
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
};