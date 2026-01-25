'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { api } from '@/lib/api';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Protected Route Wrapper
 * Ensures user is authenticated before rendering children
 * Redirects to login if not authenticated
 */
export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    checkAuth();
  }, [pathname]);

  const checkAuth = async () => {
    try {
      // Quick check: Is there a token and is it not expired?
      if (!api.isAuthenticated()) {
        console.log('❌ No valid token found');
        redirectToLogin();
        return;
      }

      // Optional: Verify token with backend
      // Uncomment if you want to validate token on every route change
      // await api.getCurrentUser();

      console.log('✅ User authenticated');
      setAuthenticated(true);
      setLoading(false);
    } catch (error) {
      console.error('❌ Authentication check failed:', error);
      redirectToLogin();
    }
  };

  const redirectToLogin = () => {
    setAuthenticated(false);
    setLoading(false);
    
    // Save intended destination
    const returnUrl = encodeURIComponent(pathname);
    router.push(`/admin/login?returnUrl=${returnUrl}`);
  };

  // Loading state
  if (loading) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Not authenticated
  if (!authenticated) {
    return null;
  }

  // Authenticated - render children
  return <>{children}</>;
}

/**
 * Hook to use authentication state
 */
export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      if (!api.isAuthenticated()) {
        setAuthenticated(false);
        setLoading(false);
        return;
      }

      // Optional: Fetch user data
      // const userData = await api.getCurrentUser();
      // setUser(userData);

      setAuthenticated(true);
      setLoading(false);
    } catch (error) {
      setAuthenticated(false);
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const { admin } = await api.login(email, password);
    setUser(admin);
    setAuthenticated(true);
  };

  const logout = () => {
    api.logout();
    setUser(null);
    setAuthenticated(false);
  };

  return {
    authenticated,
    loading,
    user,
    login,
    logout,
  };
}
