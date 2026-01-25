'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { api } from '@/lib/api';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Protected Route Wrapper (Cookie-Based Auth)
 * Verifies authentication via /me endpoint
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
      // Verify auth with backend
      const isAuth = await api.isAuthenticated();
      
      if (isAuth) {
        console.log('✅ User authenticated');
        setAuthenticated(true);
      } else {
        console.log('❌ Not authenticated');
        redirectToLogin();
      }
    } catch (error) {
      console.error('❌ Authentication check failed:', error);
      redirectToLogin();
    } finally {
      setLoading(false);
    }
  };

  const redirectToLogin = () => {
    setAuthenticated(false);
    
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
      const userData = await api.getCurrentUser();
      setUser(userData);
      setAuthenticated(true);
    } catch (error) {
      setAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const { admin } = await api.login(email, password);
    setUser(admin);
    setAuthenticated(true);
  };

  const logout = async () => {
    await api.logout();
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
