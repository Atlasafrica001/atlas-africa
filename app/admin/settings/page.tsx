'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { api } from '@/lib/api';

interface Setting {
  value: string;
  type: string;
  description: string;
}

interface Settings {
  [key: string]: Setting;
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Settings>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  // Form state
  const [formData, setFormData] = useState<Record<string, string>>({});

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await api.get('/api/v1/admin/settings');
      setSettings(response.data.settings);
      
      // Initialize form data
      const initialData: Record<string, string> = {};
      Object.keys(response.data.settings).forEach(key => {
        initialData[key] = response.data.settings[key].value;
      });
      setFormData(initialData);
    } catch (error) {
      console.error('Failed to fetch settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInitialize = async () => {
    try {
      await api.post('/api/v1/admin/settings/initialize', {});
      fetchSettings();
      alert('Default settings initialized successfully');
    } catch (error) {
      alert('Failed to initialize settings');
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const settingsArray = Object.keys(formData).map(key => ({
        key,
        value: formData[key]
      }));

      await api.put('/api/v1/admin/settings', { settings: settingsArray });
      alert('Settings saved successfully!');
      fetchSettings();
    } catch (error) {
      alert('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const renderInput = (key: string, setting: Setting) => {
    const value = formData[key] || '';

    switch (setting.type) {
      case 'boolean':
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={value === 'true'}
              onChange={(e) => handleInputChange(key, e.target.checked ? 'true' : 'false')}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-600">{setting.description}</label>
          </div>
        );

      case 'number':
        return (
          <input
            type="number"
            value={value}
            onChange={(e) => handleInputChange(key, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        );

      case 'email':
        return (
          <input
            type="email"
            value={value}
            onChange={(e) => handleInputChange(key, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        );

      case 'url':
        return (
          <input
            type="url"
            value={value}
            onChange={(e) => handleInputChange(key, e.target.value)}
            placeholder="https://..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        );

      default:
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(key, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        );
    }
  };

  const generalSettings = ['site_name', 'site_description', 'contact_email'];
  const featureSettings = ['notifications_enabled', 'maintenance_mode', 'posts_per_page', 'allow_comments'];
  const socialSettings = ['facebook_url', 'twitter_url', 'instagram_url', 'linkedin_url'];
  const analyticsSettings = ['google_analytics_id'];

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
                <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
                <p className="text-gray-600 mt-1">Configure your site preferences and options</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleInitialize}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Initialize Defaults
                </button>
                <Link
                  href="/admin/dashboard"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  ← Back
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'general', label: 'General', icon: '⚙️' },
                { id: 'features', label: 'Features', icon: '🔧' },
                { id: 'social', label: 'Social Media', icon: '📱' },
                { id: 'analytics', label: 'Analytics', icon: '📊' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Settings Form */}
          <div className="bg-white rounded-lg shadow p-6">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">General Settings</h2>
                {generalSettings.map(key => (
                  settings[key] && (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </label>
                      {renderInput(key, settings[key])}
                      <p className="text-xs text-gray-500 mt-1">{settings[key].description}</p>
                    </div>
                  )
                ))}
              </div>
            )}

            {/* Feature Settings */}
            {activeTab === 'features' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Feature Settings</h2>
                {featureSettings.map(key => (
                  settings[key] && (
                    <div key={key} className="border-b border-gray-200 pb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </label>
                      {renderInput(key, settings[key])}
                      {settings[key].type !== 'boolean' && (
                        <p className="text-xs text-gray-500 mt-1">{settings[key].description}</p>
                      )}
                    </div>
                  )
                ))}
              </div>
            )}

            {/* Social Media Settings */}
            {activeTab === 'social' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Social Media Links</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Add your social media profile URLs. Leave blank to hide icons on your site.
                </p>
                {socialSettings.map(key => (
                  settings[key] && (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {key.replace(/_url/g, '').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </label>
                      {renderInput(key, settings[key])}
                      <p className="text-xs text-gray-500 mt-1">{settings[key].description}</p>
                    </div>
                  )
                ))}
              </div>
            )}

            {/* Analytics Settings */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Analytics & Tracking</h2>
                {analyticsSettings.map(key => (
                  settings[key] && (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </label>
                      {renderInput(key, settings[key])}
                      <p className="text-xs text-gray-500 mt-1">{settings[key].description}</p>
                    </div>
                  )
                ))}
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handleSave}
                disabled={saving}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Settings'}
              </button>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">About Settings</p>
                <p>Changes to settings take effect immediately. Some settings like maintenance mode will affect all site visitors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
