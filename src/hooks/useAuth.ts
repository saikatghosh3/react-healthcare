import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
    }
  }, [isAuthenticated, navigate]);

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    navigate('/auth');
  };

  return { isAuthenticated, currentUser, logout };
};