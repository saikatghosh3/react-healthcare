import { useState, useEffect } from 'react';

export const usePatients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Load patients from localStorage
    const loadedPatients = JSON.parse(localStorage.getItem('users') || '[]');
    setPatients(loadedPatients);
  }, []);

  const addPatient = async (patientData: any) => {
    const newPatient = {
      id: Date.now().toString(),
      ...patientData
    };
    
    const updatedPatients = [...patients, newPatient];
    localStorage.setItem('users', JSON.stringify(updatedPatients));
    setPatients(updatedPatients);
  };

  const updatePatient = async (id: string, patientData: any) => {
    const updatedPatients = patients.map((patient: any) =>
      patient.id === id ? { ...patient, ...patientData } : patient
    );
    
    localStorage.setItem('users', JSON.stringify(updatedPatients));
    setPatients(updatedPatients);
  };

  const deletePatient = async (id: string) => {
    const updatedPatients = patients.filter((patient: any) => patient.id !== id);
    localStorage.setItem('users', JSON.stringify(updatedPatients));
    setPatients(updatedPatients);
  };

  return {
    patients,
    addPatient,
    updatePatient,
    deletePatient
  };
};