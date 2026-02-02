'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { api } from '@/lib/api';

interface Consultation {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectDetails: string;
  status: string; // PENDING, CONTACTED, CONVERTED
  adminNotes: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function AdminConsultationsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [filteredConsultations, setFilteredConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetchConsultations();
  }, []);

  useEffect(() => {
    filterConsultations();
  }, [statusFilter, searchTerm, consultations]);

  const fetchConsultations = async () => {
    try {
      const response = await api.get('/api/v1/admin/consultations');
      setConsultations(response.data.consultations);
    } catch (error) {
      console.error('Failed to fetch consultations:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterConsultations = () => {
    let filtered = [...consultations];

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(c => c.status === statusFilter);
    }

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(c =>
        c.fullName.toLowerCase().includes(term) ||
        c.email.toLowerCase().includes(term) ||
        c.company.toLowerCase().includes(term)
      );
    }

    setFilteredConsultations(filtered);
  };

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      await api.patch(`/api/v1/admin/consultations/${id}/status`, { status: newStatus });
      fetchConsultations();
    } catch (error) {
      alert('Failed to update status');
    }
  };

  const handleMarkAsContacted = async (id: number) => {
    try {
      await api.patch(`/api/v1/admin/consultations/${id}/contact`, {});
      fetchConsultations();
    } catch (error) {
      alert('Failed to mark as contacted');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this consultation request?')) {
      return;
    }

    try {
      await api.delete(`/api/v1/admin/consultations/${id}`);
      fetchConsultations();
      setShowDetails(false);
    } catch (error) {
      alert('Failed to delete consultation');
    }
  };

  const handleAddNotes = async (id: number, notes: string) => {
    try {
      await api.patch(`/api/v1/admin/consultations/${id}/notes`, { notes });
      fetchConsultations();
      alert('Notes saved successfully');
    } catch (error) {
      alert('Failed to add notes');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-blue-100 text-blue-800';
      case 'CONTACTED':
        return 'bg-yellow-100 text-yellow-800';
      case 'CONVERTED':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'Pending';
      case 'CONTACTED':
        return 'Contacted';
      case 'CONVERTED':
        return 'Converted';
      default:
        return status;
    }
  };

  const statusCounts = {
    all: consultations.length,
    PENDING: consultations.filter(c => c.status === 'PENDING').length,
    CONTACTED: consultations.filter(c => c.status === 'CONTACTED').length,
    CONVERTED: consultations.filter(c => c.status === 'CONVERTED').length
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Consultation Requests</h1>
                <p className="text-gray-600 mt-1">Manage and respond to consultation requests</p>
              </div>
              <Link
                href="/admin/dashboard"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                ← Back to Dashboard
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <button
              onClick={() => setStatusFilter('all')}
              className={`p-4 rounded-lg border-2 transition-all ${
                statusFilter === 'all'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <p className="text-2xl font-bold text-gray-900">{statusCounts.all}</p>
              <p className="text-sm text-gray-600 mt-1">All Requests</p>
            </button>
            
            <button
              onClick={() => setStatusFilter('PENDING')}
              className={`p-4 rounded-lg border-2 transition-all ${
                statusFilter === 'PENDING'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <p className="text-2xl font-bold text-blue-600">{statusCounts.PENDING}</p>
              <p className="text-sm text-gray-600 mt-1">Pending</p>
            </button>

            <button
              onClick={() => setStatusFilter('CONTACTED')}
              className={`p-4 rounded-lg border-2 transition-all ${
                statusFilter === 'CONTACTED'
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <p className="text-2xl font-bold text-yellow-600">{statusCounts.CONTACTED}</p>
              <p className="text-sm text-gray-600 mt-1">Contacted</p>
            </button>

            <button
              onClick={() => setStatusFilter('CONVERTED')}
              className={`p-4 rounded-lg border-2 transition-all ${
                statusFilter === 'CONVERTED'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <p className="text-2xl font-bold text-green-600">{statusCounts.CONVERTED}</p>
              <p className="text-sm text-gray-600 mt-1">Converted</p>
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by name, email, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Consultations Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredConsultations.length > 0 ? (
                    filteredConsultations.map((consultation) => (
                      <tr key={consultation.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{consultation.fullName}</div>
                            <div className="text-sm text-gray-500">{consultation.email}</div>
                            <div className="text-xs text-gray-400">{consultation.phone}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">{consultation.company}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(consultation.status)}`}>
                            {getStatusLabel(consultation.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(consultation.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => {
                              setSelectedConsultation(consultation);
                              setShowDetails(true);
                            }}
                            className="text-blue-600 hover:text-blue-900 mr-3"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDelete(consultation.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                        {searchTerm || statusFilter !== 'all' 
                          ? 'No consultations match your filters'
                          : 'No consultation requests yet'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Details Modal */}
        {showDetails && selectedConsultation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Consultation Details</h2>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Status Controls */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={selectedConsultation.status}
                    onChange={(e) => {
                      handleStatusChange(selectedConsultation.id, e.target.value);
                      setSelectedConsultation({ ...selectedConsultation, status: e.target.value });
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="PENDING">Pending</option>
                    <option value="CONTACTED">Contacted</option>
                    <option value="CONVERTED">Converted</option>
                  </select>
                </div>

                {/* Contact Button */}
                {selectedConsultation.status === 'PENDING' && (
                  <button
                    onClick={() => handleMarkAsContacted(selectedConsultation.id)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    Mark as Contacted
                  </button>
                )}

                {/* Client Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Client Information</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Name:</span>
                      <p className="text-sm text-gray-900">{selectedConsultation.fullName}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Email:</span>
                      <p className="text-sm text-gray-900">
                        <a href={`mailto:${selectedConsultation.email}`} className="text-blue-600 hover:underline">
                          {selectedConsultation.email}
                        </a>
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Phone:</span>
                      <p className="text-sm text-gray-900">
                        <a href={`tel:${selectedConsultation.phone}`} className="text-blue-600 hover:underline">
                          {selectedConsultation.phone}
                        </a>
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Company:</span>
                      <p className="text-sm text-gray-900">{selectedConsultation.company}</p>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h3>
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedConsultation.projectDetails}</p>
                </div>

                {/* Admin Notes */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Admin Notes</h3>
                  <textarea
                    value={selectedConsultation.adminNotes || ''}
                    onChange={(e) => setSelectedConsultation({ ...selectedConsultation, adminNotes: e.target.value })}
                    placeholder="Add internal notes about this consultation..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => handleAddNotes(selectedConsultation.id, selectedConsultation.adminNotes || '')}
                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    Save Notes
                  </button>
                </div>

                {/* Timestamps */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Submitted: {formatDate(selectedConsultation.createdAt)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Last Updated: {formatDate(selectedConsultation.updatedAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
