'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Simple Protected Route - localStorage based (Phase 2)
 * No API calls, just checks token exists
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simple check: does token exist?
    if (!api.isAuthenticated()) {
      router.push('/admin/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return <>{children}</>;
}

/**
 * Simple auth hook
 */
export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuthenticated(api.isAuthenticated());
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    await api.login(email, password);
    setAuthenticated(true);
  };

  const logout = () => {
    api.logout();
    setAuthenticated(false);
  };

  return { authenticated, loading, login, logout };
}