/**
 * API Client Error
 */
export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public details?: any,
    public requestId?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Simple API Client - localStorage based (Phase 2)
 * Working and tested
 */
class ApiClient {
  delete(arg0: string) {
    throw new Error('Method not implemented.');
  }
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://atlas-africa-backend.onrender.com';
  }

  private getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('authToken');
  }

  private setToken(token: string): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('authToken', token);
  }

  private removeToken(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('authToken');
  }

  private async request(endpoint: string, options: RequestInit = {}): Promise<any> {
    const url = `${this.baseUrl}${endpoint}`;
    const token = this.getToken();

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (response.status === 204) return null;

      const data = await response.json().catch(() => ({}));

      if (response.ok) return data;

      if (response.status === 401) {
        this.removeToken();
        if (typeof window !== 'undefined' && !endpoint.includes('/login')) {
          window.location.href = '/admin/login';
        }
      }

      throw new ApiError(response.status, data.error || 'Request failed', data.details);
    } catch (error) {
      if (error instanceof ApiError) throw error;
      throw new ApiError(0, 'Network error');
    }
  }

  async get(endpoint: string): Promise<any> {
    return this.request(endpoint, { method: 'GET' });
  }

  async post(endpoint: string, data?: any): Promise<any> {
    return this.request(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // AUTHENTICATION
  async login(email: string, password: string): Promise<{ admin: any; token: string }> {
    const response = await this.post('/api/v1/auth/login', {
      email: email.trim().toLowerCase(),
      password: password.trim(),
    });

    if (response.success && response.data.token) {
      this.setToken(response.data.token);
      return response.data;
    }

    throw new Error('Login failed');
  }

  logout(): void {
    this.removeToken();
    if (typeof window !== 'undefined') {
      window.location.href = '/admin/login';
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const api = new ApiClient();