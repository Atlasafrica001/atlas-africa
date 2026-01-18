// API Configuration
// This file centralizes all API calls to the backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export const API_ENDPOINTS = {
  // Public endpoints
  waitlist: `${API_BASE_URL}/waitlist`,
  consultations: `${API_BASE_URL}/consultations`,
  blog: {
    posts: `${API_BASE_URL}/blog/posts`,
    post: (slug: string) => `${API_BASE_URL}/blog/posts/${slug}`,
  },
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    verify: `${API_BASE_URL}/auth/verify`,
  },
  
  // Admin endpoints
  admin: {
    stats: `${API_BASE_URL}/admin/stats`,
    waitlist: {
      list: `${API_BASE_URL}/admin/waitlist`,
      notify: (id: number) => `${API_BASE_URL}/admin/waitlist/${id}/notify`,
      delete: (id: number) => `${API_BASE_URL}/admin/waitlist/${id}`,
      export: `${API_BASE_URL}/admin/waitlist/export`,
    },
    consultations: {
      list: `${API_BASE_URL}/admin/consultations`,
      detail: (id: number) => `${API_BASE_URL}/admin/consultations/${id}`,
      updateStatus: (id: number) => `${API_BASE_URL}/admin/consultations/${id}/status`,
      export: `${API_BASE_URL}/admin/consultations/export`,
    },
    blog: {
      list: `${API_BASE_URL}/admin/blog/posts`,
      detail: (id: number) => `${API_BASE_URL}/admin/blog/posts/${id}`,
      create: `${API_BASE_URL}/admin/blog/posts`,
      update: (id: number) => `${API_BASE_URL}/admin/blog/posts/${id}`,
      delete: (id: number) => `${API_BASE_URL}/admin/blog/posts/${id}`,
    },
    upload: `${API_BASE_URL}/admin/upload`,
  },
};

// Helper function for authenticated requests
export const getAuthHeaders = (token?: string) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const authToken = token || (typeof window !== 'undefined' ? localStorage.getItem('token') : null);
  
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }

  return headers;
};

// Helper function for API calls
export const apiCall = async (
  url: string,
  options?: RequestInit,
  requireAuth = false
) => {
  const headers = requireAuth ? getAuthHeaders() : { 'Content-Type': 'application/json' };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error?.message || 'API request failed');
  }

  return data;
};
