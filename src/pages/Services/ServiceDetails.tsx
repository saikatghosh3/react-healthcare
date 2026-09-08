import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronRight,
  Phone,
  Star,
  CheckCircle2,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  specialtiesData,
  diagnosticsData,
  preventiveCareData,
  emergencyData,
} from './data/servicesData';
import {
  categoryThemes,
  getServiceContent,
  ServiceCategory,
  ServiceDetailContent,
} from './data/serviceDetailContent';
import { ServiceFeatures } from './components/ServiceFeatures';
import { ServiceFAQs } from './components/ServiceFAQs';
import { ServiceCard } from './components/ServiceCard';
import { handleImageError } from '../../utils/imageUtils';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  link: string;
  tests?: string[];
}

const allServices: ServiceItem[] = [
  ...specialtiesData,
  ...diagnosticsData,
  ...preventiveCareData,
  ...emergencyData,
];

const categoryLabels: Record<ServiceCategory, string> = {
  specialties: 'Medical Specialty',
  diagnostics: 'Health Package',
  preventive: 'Preventive Care',
  emergency: 'Emergency Service',
};

const findCategory = (link: string): ServiceCategory => {
  if (specialtiesData.some((s) => s.link === link)) return 'specialties';
  if (diagnosticsData.some((s) => s.link === link)) return 'diagnostics';
  if (preventiveCareData.some((s) => s.link === link)) return 'preventive';
  return 'emergency';
};

export const ServiceDetails = () => {
  const { serviceId } = useParams();

  const service = allServices.find((s) => s.link.split('/').pop() === serviceId);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-center text-3xl font-bold text-slate-900">Service not found</h1>
        <div className="mt-6 flex justify-center">
          <Link
            to="/services"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Browse All Services
          </Link>
        </div>
      </div>
    );
  }

  const category = findCategory(service.link);
  const theme = categoryThemes[category];
  const content: ServiceDetailContent = getServiceContent(service.id, service.title, category);
  const tests = service.tests;

  const relatedServices = content.related
    .map((slug) => allServices.find((s) => s.link.split('/').pop() === slug))
    .filter((s): s is ServiceItem => Boolean(s));

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50">
      {/* ===== BREADCRUMB ===== */}
      <div className="border-b border-slate-100 bg-white">
        <div className="container mx-auto flex flex-wrap items-center gap-2 px-4 py-4 text-sm">
          <ArrowLeft className="h-4 w-4 text-blue-600" />
          <Link to="/services" className="font-medium text-slate-400 transition-colors hover:text-blue-600">
            All Services
          </Link>
          <ChevronRight className="h-4 w-4 text-slate-300" />
          <span className={`font-bold ${theme.text}`}>{service.title}</span>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className={`relative overflow-hidden ${theme.hero} py-14 sm:py-20`}>
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-24 -top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-300 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />

        <div className="relative container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
                <Sparkles className="h-4 w-4" /> {categoryLabels[category]}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.9 Rated
              </span>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-white/90">
              {content.tagline}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
              {service.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="rounded-full bg-white px-5 py-2 text-lg font-extrabold text-slate-900 shadow-lift">
                {service.price}
              </span>
              <span className="text-sm font-medium text-white/70">per visit · transparent pricing</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/doctors"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <CalendarCheck className="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                Book Appointment
              </a>
              <a
                href="tel:+12345678900"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              >
                <Phone className="h-5 w-5" /> Call Us
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {content.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                  <p className="text-xl font-extrabold text-white sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-white/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                onError={handleImageError}
                className="h-[360px] w-full object-cover sm:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">
                <div>
                  <p className="text-lg font-extrabold text-white">{service.title}</p>
                  <p className="text-sm text-white/70">{categoryLabels[category]}</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-3 py-1.5 text-xs font-bold text-white">
                  <ShieldCheck className="h-3.5 w-3.5" /> Certified Care
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTS INCLUDED ===== */}
      {tests && tests.length > 0 && (
        <section className="bg-white py-14 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                <CheckCircle2 className="h-4 w-4" /> Inside This Package
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Tests Included
              </h2>
              <p className="mt-3 text-slate-500">
                Every test in this package, performed to NABL-accredited standards.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tests.map((test, i) => (
                <motion.div
                  key={test}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-soft">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-700">{test}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FEATURES / PROCESS / BENEFITS ===== */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <ServiceFeatures
            features={content.features}
            process={content.process}
            benefits={content.benefits}
          />
        </div>
      </section>

      {/* ===== FAQS ===== */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.4fr]">
            <div className="lg:sticky lg:top-40">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                Got Questions?
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-slate-500">
                Everything you need to know about {service.title}. Still unsure?
                Our team is one call away.
              </p>
              <a
                href="tel:+12345678900"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                <Phone className="h-4 w-4" /> Talk to an Expert
              </a>
            </div>

            <ServiceFAQs faqs={content.faqs} />
          </div>
        </div>
      </section>

      {/* ===== RELATED SERVICES ===== */}
      {relatedServices.length > 0 && (
        <section className="bg-slate-50 py-14 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                Explore More
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Related Services
              </h2>
              <p className="mt-3 text-slate-500">
                Services our patients often explore alongside {service.title}.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <ServiceCard
                  key={related.id}
                  title={related.title}
                  description={related.description}
                  price={related.price}
                  image={related.image}
                  link={related.link}
                  tests={related.tests}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className={`relative overflow-hidden rounded-[2.5rem] ${theme.hero} px-6 py-14 text-center shadow-lift sm:px-12`}>
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
              <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cyan-300 blur-3xl" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                <Sparkles className="h-4 w-4" /> Ready When You Are
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Take the next step toward better health
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Book your {service.title} today and let our team take care of the rest.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/doctors"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <CalendarCheck className="h-5 w-5 text-blue-600" /> Book Appointment
                </a>
                <a
                  href="tel:+12345678900"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
                >
                  <Phone className="h-5 w-5" /> Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};