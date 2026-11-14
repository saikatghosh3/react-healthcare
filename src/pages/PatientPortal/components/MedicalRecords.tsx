import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  Eye,
  X,
  Stethoscope,
  Calendar,
  User,
  ChevronRight,
} from 'lucide-react';
import {
  getPatientMedicalRecords,
  generatePDF,
} from '../../../utils/medicalRecordUtils';

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

export const MedicalRecords = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const records: MedicalRecord[] = getPatientMedicalRecords(currentUser?.id);
  const [previewRecord, setPreviewRecord] = useState<MedicalRecord | null>(null);

  const handleDownload = (record: MedicalRecord) => {
    const pdfUrl = generatePDF(record);
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `medical-record-${record.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(pdfUrl);
  };

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/60 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-extrabold text-slate-900">Medical Records</h3>
              <p className="text-xs text-slate-500">
                {records.length} report{records.length === 1 ? '' : 's'} in your
                account
              </p>
            </div>
          </div>
        </div>

        {records.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-300">
              <FileText className="h-7 w-7" />
            </span>
            <p className="mt-4 font-bold text-slate-700">No records available</p>
            <p className="mt-1 text-sm text-slate-500">
              Your test results and reports will appear here once available.
            </p>
            <Link
              to="/home-collection"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-700"
            >
              Book a lab test
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/40 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                  <th className="px-6 py-3">Service</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Doctor</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {records.map((record) => (
                  <tr
                    key={record.id}
                    className="transition-colors hover:bg-slate-50/60"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                          <FileText className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-bold text-slate-800">
                            {record.serviceDetails.title}
                          </p>
                          <p className="text-xs text-slate-400">
                            {record.type}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        {new Date(record.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Stethoscope className="h-3.5 w-3.5 text-slate-400" />
                        {record.doctor}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold capitalize ring-1 ${
                          record.status === 'completed'
                            ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
                            : 'bg-amber-50 text-amber-700 ring-amber-200'
                        }`}
                      >
                        {record.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setPreviewRecord(record)}
                          aria-label="Preview record"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDownload(record)}
                          aria-label="Download record"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {previewRecord && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setPreviewRecord(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-t-2xl bg-white shadow-lift sm:rounded-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <FileText className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Medical Record
                </h3>
              </div>
              <button
                onClick={() => setPreviewRecord(null)}
                aria-label="Close preview"
                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 px-6 py-6">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <User className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Patient
                  </p>
                  <p className="font-bold text-slate-800">
                    {previewRecord.patientName}
                  </p>
                </div>
              </div>

              <dl className="grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Service
                  </dt>
                  <dd className="mt-1 font-bold text-slate-800">
                    {previewRecord.serviceDetails.title}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Type
                  </dt>
                  <dd className="mt-1 font-bold text-slate-800">
                    {previewRecord.type}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Date
                  </dt>
                  <dd className="mt-1 font-bold text-slate-800">
                    {new Date(previewRecord.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Doctor
                  </dt>
                  <dd className="mt-1 font-bold text-slate-800">
                    {previewRecord.doctor}
                  </dd>
                </div>
              </dl>

              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-bold capitalize ring-1 ${
                  previewRecord.status === 'completed'
                    ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
                    : 'bg-amber-50 text-amber-700 ring-amber-200'
                }`}
              >
                {previewRecord.status}
              </span>
            </div>

            <div className="flex justify-end border-t border-slate-100 px-6 py-4">
              <button
                onClick={() => handleDownload(previewRecord)}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-700"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};