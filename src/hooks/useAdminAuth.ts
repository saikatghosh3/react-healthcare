import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAdminAuth = () => {
  const navigate = useNavigate();
  const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';

  useEffect(() => {
    if (!isAdminAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAdminAuthenticated, navigate]);

  return { isAdminAuthenticated };
};