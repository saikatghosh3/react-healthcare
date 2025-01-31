import React, { useState } from 'react';
import { FileText, Download, Eye, X } from 'lucide-react';
import { getMedicalRecords, generatePDF } from '../../../../utils/medicalRecordUtils';

export const MedicalRecordsList = () => {
  const records = getMedicalRecords();
  const [previewRecord, setPreviewRecord] = useState(null);

  const handleDownload = (record) => {
    const pdfUrl = generatePDF(record);
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `medical-record-${record.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(pdfUrl);
  };

  if (records.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Medical Records</h2>
        <p className="text-gray-600 text-center py-4">No medical records available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Medical Records</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Patient</th>
              <th className="text-left py-3">Type</th>
              <th className="text-left py-3">Date</th>
              <th className="text-left py-3">Doctor</th>
              <th className="text-right py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="border-b hover:bg-gray-50">
                <td className="py-3">{record.patientName}</td>
                <td className="py-3">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span>{record.serviceDetails.title}</span>
                  </div>
                </td>
                <td>{new Date(record.date).toLocaleDateString()}</td>
                <td>{record.doctor}</td>
                <td className="text-right">
                  <button 
                    onClick={() => setPreviewRecord(record)}
                    className="text-blue-600 hover:text-blue-800 mr-3"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => handleDownload(record)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Preview Modal */}
      {previewRecord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Medical Record Preview</h3>
              <button 
                onClick={() => setPreviewRecord(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <strong>Patient Name:</strong> {previewRecord.patientName}
              </div>
              <div>
                <strong>Service:</strong> {previewRecord.serviceDetails.title}
              </div>
              <div>
                <strong>Date:</strong> {new Date(previewRecord.date).toLocaleDateString()}
              </div>
              <div>
                <strong>Doctor:</strong> {previewRecord.doctor}
              </div>
              <div>
                <strong>Status:</strong> {previewRecord.status}
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => handleDownload(previewRecord)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};