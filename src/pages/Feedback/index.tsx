import React, { useState } from 'react';
import {
  Star,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Sparkles,
  Heart,
  Lightbulb,
  CheckCircle2,
  Send,
  ThumbsUp,
  ShieldCheck,
  Clock,
  Headphones,
  Quote
} from 'lucide-react';

const branches = ['Main Branch', 'North Branch', 'South Branch', 'City Center', 'Lakeview'];
const identities = ['Patient', 'Visitor', 'Staff', 'Partner', 'Other'];

const categories = [
  { label: 'Overall Experience', key: 'overall' },
  { label: 'Doctor Care', key: 'doctor' },
  { label: 'Staff & Facility', key: 'staff' },
  { label: 'Wait Time', key: 'wait' },
  { label: 'Hygiene & Cleanliness', key: 'hygiene' }
];

export const Feedback = () => {
  const [formData, setFormData] = useState({
    identity: '',
    name: '',
    email: '',
    phone: '',
    branch: '',
    rating: 0,
    categoryRatings: { overall: 0, doctor: 0, staff: 0, wait: 0, hygiene: 0 },
    visitPurpose: '',
    feedback: '',
    improvement: '',
    recommend: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleStar = (field: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCategoryStar = (key: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      categoryRatings: { ...prev.categoryRatings, [key]: value }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeStars = (value: number) =>
    Array.from({ length: 5 }, (_, i) => i + 1 <= value);

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all duration-200 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-100';
  const labelClass = 'mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700';

  if (submitted) {
    return (
      <div className="min-h-screen pt-20">
        <div className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-card sm:p-12">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-11 w-11 text-emerald-600" />
            </div>
            <div className="mb-3 flex items-center justify-center gap-1">
              {activeStars(formData.rating).map((on, i) => (
                <Star
                  key={i}
                  className={`h-8 w-8 ${on ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
                />
              ))}
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Thank You!</h1>
            <p className="mt-3 text-slate-500">
              Your feedback has been received and will help us deliver a better care
              experience for everyone. We truly value your time and insight.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={() => setSubmitted(false)}
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Submit Another Response
              </button>
              <a
                href="/"
                className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" />
          <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-teal-400 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            <Sparkles className="h-4 w-4" /> Your Voice Matters
          </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-extrabold leading-snug text-white sm:text-4xl">
            Share Your Experience, <span className="text-emerald-400">Shape Our Care</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Your feedback helps us grow, improve and deliver the exceptional healthcare
            you deserve. Every insight brings us one step closer to perfection.
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-4">
            {[
              { icon: Heart, value: '98%', label: 'Satisfied Patients' },
              { icon: Clock, value: '5 min', label: 'Avg. Response' },
              { icon: ShieldCheck, value: '100%', label: 'Confidential' }
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <s.icon className="mx-auto h-6 w-6 text-emerald-400" />
                <p className="mt-2 text-xl font-bold text-white sm:text-2xl">{s.value}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAIN ===== */}
      <div className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1fr_380px]">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-9"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Feedback Form</h2>
              <p className="mt-1 text-sm text-slate-500">
                Fields marked with <span className="text-red-500">*</span> are required.
              </p>
            </div>

            {/* ABOUT YOU */}
            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-slate-800">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-600">1</span>
                About You
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}><User className="h-4 w-4 text-emerald-500" /> Identity <span className="text-red-500">*</span></label>
                  <select
                    required
                    value={formData.identity}
                    onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Choose...</option>
                    {identities.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}><Building2 className="h-4 w-4 text-emerald-500" /> Branch <span className="text-red-500">*</span></label>
                  <select
                    required
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Choose Your Branch</option>
                    {branches.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}><User className="h-4 w-4 text-emerald-500" /> Name (Optional)</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}><Mail className="h-4 w-4 text-emerald-500" /> Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="abc@xyz.com"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}><Phone className="h-4 w-4 text-emerald-500" /> Contact Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* OVERALL RATING */}
            <div className="mb-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
              <h3 className="mb-1 flex items-center gap-2 text-base font-bold text-slate-800">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-sm text-white">2</span>
                Overall Rating <span className="text-red-500">*</span>
              </h3>
              <div className="mt-4 flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => handleStar('rating', n)}
                    className="transition-transform hover:scale-125"
                    aria-label={`Rate ${n} stars`}
                  >
                    <Star
                      className={`h-9 w-9 ${n <= formData.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} transition-colors`}
                    />
                  </button>
                ))}
              </div>
              <p className="mt-2 text-sm font-medium text-slate-600">
                {formData.rating === 0
                  ? 'Tap a star to rate your visit'
                  : formData.rating === 5
                    ? 'Outstanding! 🌟'
                    : formData.rating >= 4
                      ? 'Great, we appreciate it!'
                      : formData.rating >= 3
                        ? 'Good, thanks for sharing'
                        : 'Sorry to hear that — tell us more below'}
              </p>
            </div>

            {/* CATEGORY RATINGS */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {categories.map((c) => (
                <div key={c.key} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
                  <p className="mb-3 text-sm font-semibold text-slate-700">{c.label}</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => handleCategoryStar(c.key, n)}
                        className="transition-transform hover:scale-125"
                        aria-label={`Rate ${c.label} ${n} stars`}
                      >
                        <Star
                          className={`h-5 w-5 ${n <= formData.categoryRatings[c.key as keyof typeof formData.categoryRatings] ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* FEEDBACK */}
            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-slate-800">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-600">3</span>
                Tell Us More
              </h3>
              <div className="grid gap-5">
                <div>
                  <label className={labelClass}><MessageSquare className="h-4 w-4 text-emerald-500" /> Contact / Feedback <span className="text-red-500">*</span></label>
                  <textarea
                    required
                    value={formData.feedback}
                    onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                    rows={4}
                    placeholder="Share your experience, suggestions or concerns..."
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}><Lightbulb className="h-4 w-4 text-emerald-500" /> Scope of Improvement (Optional)</label>
                  <textarea
                    value={formData.improvement}
                    onChange={(e) => setFormData({ ...formData, improvement: e.target.value })}
                    rows={3}
                    placeholder="What can we do better?"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}><ThumbsUp className="h-4 w-4 text-emerald-500" /> Would you recommend us? (Optional)</label>
                  <div className="mt-1 flex gap-3">
                    {['Definitely', 'Maybe', 'Not Sure', 'No'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, recommend: opt })}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                          formData.recommend === opt
                            ? 'border-emerald-500 bg-emerald-500 text-white shadow-md'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 text-base font-bold text-white shadow-lift transition-all duration-300 hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              Submit Feedback
              <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
            <p className="mt-4 text-center text-xs text-slate-400">
              <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-emerald-500" />
              Your response is 100% confidential and anonymous.
            </p>
          </form>

          {/* SIDE PANEL */}
          <aside className="space-y-6">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-emerald-900 p-8 text-white shadow-card">
              <Quote className="h-10 w-10 text-emerald-400" />
              <p className="mt-4 text-lg font-semibold leading-relaxed">
                "Every piece of feedback is a gift. It tells us exactly where we are and
                where we need to go."
              </p>
              <p className="mt-4 text-sm text-emerald-300">— Our Care Team</p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
              <h3 className="mb-5 text-lg font-bold text-slate-900">Why Your Feedback Matters</h3>
              <ul className="space-y-4">
                {[
                  { icon: Heart, text: 'Helps us personalize your care journey' },
                  { icon: ShieldCheck, text: 'Drives safety and quality improvements' },
                  { icon: Lightbulb, text: 'Inspires innovation in our services' },
                  { icon: Users, text: 'Shapes a better experience for everyone' }
                ].map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <f.icon className="h-4.5 w-4.5 text-emerald-600" />
                    </span>
                    <p className="text-sm text-slate-600">{f.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
              <h3 className="mb-4 text-lg font-bold text-slate-900">Speak to Us Directly</h3>
              <div className="space-y-3">
                <a
                  href="tel:+15550001122"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <Headphones className="h-5 w-5 text-emerald-600" /> +1 (555) 000-1122
                </a>
                <a
                  href="mailto:feedback@healthcare.com"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <Mail className="h-5 w-5 text-emerald-600" /> feedback@healthcare.com
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
