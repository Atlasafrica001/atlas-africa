"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api, ApiError } from '@/lib/api';

interface Admin {
  id: number;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

interface AuthContextType {
  admin: Admin | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check for existing token on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Use the API client's built-in auth check
        if (api.isAuthenticated()) {
          const storedToken = localStorage.getItem('authToken');
          setToken(storedToken);
          
          // Optionally fetch current user data
          // Uncomment if you have a /me endpoint:
          // try {
          //   const userData = await api.getCurrentUser();
          //   setAdmin(userData.data);
          // } catch (error) {
          //   console.error('Failed to fetch user data:', error);
          // }
          
          // For now, just mark as authenticated without fetching user
          setAdmin({ id: 0, email: 'authenticated' }); // Placeholder
        } else {
          // No valid token
          localStorage.removeItem('authToken');
          setToken(null);
          setAdmin(null);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('authToken');
        setToken(null);
        setAdmin(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // API client handles login and token storage
      const result = await api.login(email, password);
      
      // The api.login method already stores the token in localStorage
      // We just need to update our state
      setToken(result.token);
      setAdmin(result.admin);

      // Redirect to admin dashboard
      router.push('/admin');
    } catch (error: any) {
      console.error('Login error in context:', error);
      
      // Re-throw with user-friendly message
      if (error instanceof ApiError) {
        throw new Error(error.message);
      }
      throw new Error('Login failed. Please try again.');
    }
  };

  const logout = () => {
    // API client handles logout and token removal
    api.logout();
    
    // Clear state
    setToken(null);
    setAdmin(null);
    
    // Redirect is handled by api.logout(), but we can do it here too
    router.push('/admin/login');
  };

  const isAuthenticated = api.isAuthenticated();

  return (
    <AuthContext.Provider 
      value={{ 
        admin, 
        token, 
        login, 
        logout, 
        isLoading,
        isAuthenticated 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}