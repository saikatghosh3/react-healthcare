import { jsPDF } from 'jspdf';

interface MedicalRecord {
  id: string;
  patientId: string;
  patientName: string;
  type: string;
  date: string;
  serviceDetails: {
    title: string;
    type: string;
  };
  doctor: string;
  status: 'completed' | 'pending';
}

export const saveMedicalRecord = (recordData: Partial<MedicalRecord>): MedicalRecord => {
  const records = JSON.parse(localStorage.getItem('medicalRecords') || '[]');
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  
  const newRecord = {
    id: Date.now().toString(),
    patientId: currentUser.id,
    patientName: currentUser.name,
    date: new Date().toISOString(),
    doctor: 'Dr. Sarah Johnson', // Default doctor for diagnostic services
    status: 'completed',
    ...recordData
  } as MedicalRecord;
  
  records.push(newRecord);
  localStorage.setItem('medicalRecords', JSON.stringify(records));
  return newRecord;
};

export const getMedicalRecords = (): MedicalRecord[] => {
  return JSON.parse(localStorage.getItem('medicalRecords') || '[]');
};

export const getPatientMedicalRecords = (patientId: string): MedicalRecord[] => {
  const records = getMedicalRecords();
  return records.filter(record => record.patientId === patientId);
};

export const generatePDF = (record: MedicalRecord): string => {
  const doc = new jsPDF();
  
  // Add header
  doc.setFontSize(20);
  doc.text('Medical Record', 105, 20, { align: 'center' });
  
  // Add content
  doc.setFontSize(12);
  doc.text(`Patient Name: ${record.patientName}`, 20, 40);
  doc.text(`Service: ${record.serviceDetails.title}`, 20, 50);
  doc.text(`Date: ${new Date(record.date).toLocaleDateString()}`, 20, 60);
  doc.text(`Doctor: ${record.doctor}`, 20, 70);
  doc.text(`Status: ${record.status}`, 20, 80);
  
  // Generate PDF blob
  const pdfBlob = doc.output('blob');
  return URL.createObjectURL(pdfBlob);
};