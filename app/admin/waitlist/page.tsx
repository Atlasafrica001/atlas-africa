'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import AdminNavbar from '@/components/AdminNavbar';
import { api } from '@/lib/api';

interface WaitlistEntry {
  id: number;
  email: string;
  name: string | null;
  createdAt: string;
}

export default function AdminWaitlistPage() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  useEffect(() => {
    filterEntries();
  }, [searchTerm, entries]);

  const fetchEntries = async () => {
    try {
      const response = await api.get('/api/v1/waitlist');
      setEntries(response.data.entries || []);
    } catch (error) {
      console.error('Failed to fetch waitlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterEntries = () => {
    if (!searchTerm) {
      setFilteredEntries(entries);
      return;
    }

    const term = searchTerm.toLowerCase();
    const filtered = entries.filter(entry =>
      entry.email.toLowerCase().includes(term) ||
      (entry.name && entry.name.toLowerCase().includes(term))
    );
    setFilteredEntries(filtered);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to remove this email from the waitlist?')) {
      return;
    }

    try {
      await api.delete(`/api/v1/waitlist/${id}`);
      fetchEntries();
    } catch (error) {
      alert('Failed to delete entry');
    }
  };

  const handleExportCSV = () => {
    setExporting(true);
    try {
      const csv = [
        ['Name', 'Email', 'Joined Date'],
        ...filteredEntries.map(entry => [
          entry.name || '',
          entry.email,
          new Date(entry.createdAt).toLocaleDateString()
        ])
      ].map(row => row.join(',')).join('\n');

      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `waitlist-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Failed to export CSV');
    } finally {
      setExporting(false);
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
        <AdminNavbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Waitlist</h1>
            <p className="text-gray-600 mt-1">Manage email subscribers and export data</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-sm font-medium text-gray-600">Total Subscribers</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">{entries.length}</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {entries.filter(e => {
                  const entryDate = new Date(e.createdAt);
                  const now = new Date();
                  return entryDate.getMonth() === now.getMonth() && 
                         entryDate.getFullYear() === now.getFullYear();
                }).length}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-sm font-medium text-gray-600">With Names</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">
                {entries.filter(e => e.name).length}
              </p>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <button
                onClick={handleExportCSV}
                disabled={exporting || filteredEntries.length === 0}
                className="w-full sm:w-auto flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {exporting ? 'Exporting...' : 'Export CSV'}
              </button>
            </div>
          </div>

          {/* Waitlist Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Joined
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredEntries.length > 0 ? (
                    filteredEntries.map((entry, index) => (
                      <tr key={entry.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {entry.name || '—'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{entry.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(entry.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href={`mailto:${entry.email}`}
                            className="text-blue-600 hover:text-blue-900 mr-4"
                          >
                            Email
                          </a>
                          <button
                            onClick={() => handleDelete(entry.id)}
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
                        {searchTerm 
                          ? 'No entries match your search'
                          : 'No waitlist entries yet'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">💡 Quick Tips</p>
                <ul className="list-disc list-inside space-y-1 text-blue-700">
                  <li>Click "Email" to send a message directly from your email client</li>
                  <li>Export CSV to import into your email marketing platform</li>
                  <li>Use search to find specific subscribers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
