import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Menu, X, Phone, Shield, Ambulance, LogOut } from 'lucide-react';

export const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEmergencyDropdown, setShowEmergencyDropdown] = useState(false);
  const navigate = useNavigate();
  
  const isAdmin = localStorage.getItem('isAdminAuthenticated') === 'true';
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    if (isAdmin) {
      localStorage.removeItem('isAdminAuthenticated');
      navigate('/admin/login');
    } else {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('currentUser');
      navigate('/auth');
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">HealthCare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/doctors" className="text-gray-600 hover:text-blue-600">Doctors</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            
            {/* {isAuthenticated && ( */}
              <Link to="/portal" className="text-gray-600 hover:text-blue-600">Patient Portal</Link>
            {/* )} */}
            
            {isAdmin ? (
              <Link to="/admin/dashboard" className="text-gray-600 hover:text-blue-600">Admin Panel</Link>
            ) : !isAuthenticated && (
              <Link to="/admin/login" className="text-gray-600 hover:text-blue-600">Admin Login</Link>
            )}
            
            {/* Emergency Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowEmergencyDropdown(!showEmergencyDropdown)}
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
              >
                <Ambulance className="h-5 w-5" />
                <span>Emergency</span>
              </button>
              
              {showEmergencyDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border p-4">
                  <div className="flex items-center space-x-2 text-red-600 mb-3">
                    <Phone className="h-5 w-5" />
                    <a href="tel:911" className="font-bold hover:text-red-700">911</a>
                  </div>
                  <Link
                    to="/emergency"
                    className="block text-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    onClick={() => setShowEmergencyDropdown(false)}
                  >
                    Go to Emergency Page
                  </Link>
                </div>
              )}
            </div>

            {(isAuthenticated || isAdmin) ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            ) : (
              <Link 
                to="/auth" 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
              <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
              <Link to="/doctors" className="text-gray-600 hover:text-blue-600">Doctors</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
              
              {isAuthenticated && (
                <Link to="/portal" className="text-gray-600 hover:text-blue-600">Patient Portal</Link>
              )}
              
              {isAdmin ? (
                <Link to="/admin/dashboard" className="text-gray-600 hover:text-blue-600">Admin Panel</Link>
              ) : !isAuthenticated && (
                <Link to="/admin/login" className="text-gray-600 hover:text-blue-600">Admin Login</Link>
              )}
              
              <div className="border-t pt-4">
                <div className="flex items-center space-x-2 text-red-600 mb-3">
                  <Phone className="h-5 w-5" />
                  <a href="tel:911" className="font-bold">Emergency: 911</a>
                </div>
                <Link
                  to="/emergency"
                  className="block text-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Go to Emergency Page
                </Link>
              </div>

              {(isAuthenticated || isAdmin) ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              ) : (
                <Link 
                  to="/auth" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};