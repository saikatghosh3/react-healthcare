import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/Services/ServiceDetails';
import { Doctors } from './pages/Doctors';
import { DoctorDetails } from './pages/Doctors/DoctorDetails';
import { Contact } from './pages/Contact';
import { Emergency } from './pages/Emergency';
import { PatientPortal } from './pages/PatientPortal';
import { AdminDashboard } from './pages/Admin/Dashboard';
import { AdminLogin } from './pages/Admin/Login';
import { AuthPage } from './pages/Auth/AuthPage';
import { VideoConsultation } from './pages/VideoConsultation';
import { HomeCollection } from './pages/HomeCollection';
import { Feedback } from './pages/Feedback';
import { Cart } from './pages/Cart';

export const App = () => {
  return (
    <BookingProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow pt-32">
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
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
};