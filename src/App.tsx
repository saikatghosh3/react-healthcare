import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { BookingProvider } from './context/BookingContext';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BackToTop } from './components/BackToTop';
import { Loader } from './components/Loader';

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const ServiceDetails = lazy(() => import('./pages/Services/ServiceDetails').then((m) => ({ default: m.ServiceDetails })));
const Doctors = lazy(() => import('./pages/Doctors').then((m) => ({ default: m.Doctors })));
const DoctorDetails = lazy(() => import('./pages/Doctors/DoctorDetails').then((m) => ({ default: m.DoctorDetails })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Emergency = lazy(() => import('./pages/Emergency').then((m) => ({ default: m.Emergency })));
const PatientPortal = lazy(() => import('./pages/PatientPortal').then((m) => ({ default: m.PatientPortal })));
const AdminDashboard = lazy(() => import('./pages/Admin/Dashboard').then((m) => ({ default: m.AdminDashboard })));
const AdminLogin = lazy(() => import('./pages/Admin/Login').then((m) => ({ default: m.AdminLogin })));
const AuthPage = lazy(() => import('./pages/Auth/AuthPage').then((m) => ({ default: m.AuthPage })));
const VideoConsultation = lazy(() => import('./pages/VideoConsultation').then((m) => ({ default: m.VideoConsultation })));
const HomeCollection = lazy(() => import('./pages/HomeCollection').then((m) => ({ default: m.HomeCollection })));
const Feedback = lazy(() => import('./pages/Feedback').then((m) => ({ default: m.Feedback })));
const Cart = lazy(() => import('./pages/Cart').then((m) => ({ default: m.Cart })));
const PrivacyPolicy = lazy(() => import('./pages/Legal/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./pages/Legal/TermsOfService').then((m) => ({ default: m.TermsOfService })));
const FAQPage = lazy(() => import('./pages/FAQ/FAQPage').then((m) => ({ default: m.FAQPage })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

export const App = () => {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <BookingProvider>
      <Router>
        <ScrollToTop />
        <AnimatePresence>
          {booting && (
            <motion.div
              key="boot-loader"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="fixed inset-0 z-[100]"
            >
              <Loader fullScreen />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow pt-32">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetails />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctors/:doctorId" element={<DoctorDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/portal" element={<PatientPortal />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/video-consultation" element={<VideoConsultation />} />
                <Route path="/home-collection" element={<HomeCollection />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </BookingProvider>
  );
};
