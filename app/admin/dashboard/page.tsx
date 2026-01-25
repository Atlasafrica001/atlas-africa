'use client';

import { ProtectedRoute, useAuth } from '@/components/ProtectedRoute';

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <button
              onClick={logout}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="bg-white overflow-hidden shadow rounded-lg mb-8">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Welcome to Atlas Africa Admin
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  You're successfully authenticated. Manage your creative agency from here.
                </p>
              </div>
              {user && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    Logged in as: <span className="font-semibold">{user.email}</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Stat Card 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Waitlist Signups
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  --
                </dd>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Blog Posts
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  --
                </dd>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Consultations
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  --
                </dd>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <button className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span className="mt-2 block text-sm font-medium text-gray-900">
                  View Waitlist
                </span>
              </button>

              <button className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span className="mt-2 block text-sm font-medium text-gray-900">
                  Create Blog Post
                </span>
              </button>

              <button className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span className="mt-2 block text-sm font-medium text-gray-900">
                  View Consultations
                </span>
              </button>

              <button className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span className="mt-2 block text-sm font-medium text-gray-900">
                  Settings
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
