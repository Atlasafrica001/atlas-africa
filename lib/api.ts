/**
 * API Client Error
 * Custom error class for API-related errors
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
 * API Client Configuration
 */
interface ApiClientConfig {
  baseUrl?: string;
  timeout?: number;
  retryAttempts?: number;
}

/**
 * API Client
 * Centralized HTTP client for all API requests
 */
class ApiClient {
  private baseUrl: string;
  private timeout: number;
  private retryAttempts: number;

  constructor(config: ApiClientConfig = {}) {
    this.baseUrl = config.baseUrl || 
      process.env.NEXT_PUBLIC_API_URL || 
      'https://atlas-africa-backend.onrender.com';
    this.timeout = config.timeout || 30000; // 30 seconds
    this.retryAttempts = config.retryAttempts || 0;
  }

  /**
   * Get authentication token from storage
   */
  private getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('authToken');
  }

  /**
   * Set authentication token in storage
   */
  private setToken(token: string): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('authToken', token);
  }

  /**
   * Remove authentication token from storage
   */
  private removeToken(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('authToken');
  }

  /**
   * Check if token is expired
   */
  private isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  }

  /**
   * Get request headers
   */
  private getHeaders(includeAuth: boolean = true): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    // Add authentication token if available and requested
    if (includeAuth) {
      const token = this.getToken();
      if (token && !this.isTokenExpired(token)) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    // Generate request ID for tracing
    headers['X-Request-ID'] = this.generateRequestId();

    return headers;
  }

  /**
   * Generate unique request ID
   */
  private generateRequestId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Make HTTP request with retry logic
   */
  private async request(
    endpoint: string,
    options: RequestInit = {},
    attempt: number = 0
  ): Promise<any> {
    const url = `${this.baseUrl}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          ...this.getHeaders(
            typeof options.headers === 'object' && options.headers !== null 
              && 'Authorization' in options.headers 
                ? (options.headers as Record<string, string>)['Authorization'] !== 'skip'
                : true
          ),
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      // Get request ID from response headers
      const requestId = response.headers.get('X-Request-ID') || 'unknown';

      // Handle different status codes
      if (response.status === 204) {
        return null; // No content
      }

      const data = await response.json().catch(() => ({}));

      // Success responses (2xx)
      if (response.ok) {
        return data;
      }

      // Handle authentication errors (401)
      if (response.status === 401) {
        this.removeToken();
        if (typeof window !== 'undefined') {
          window.location.href = '/admin/login';
        }
      }

      // Rate limit error (429) - retry after delay
      if (response.status === 429 && attempt < this.retryAttempts) {
        const retryAfter = parseInt(response.headers.get('Retry-After') || '5', 10);
        await this.delay(retryAfter * 1000);
        return this.request(endpoint, options, attempt + 1);
      }

      // Throw API error for all other errors
      throw new ApiError(
        response.status,
        data.error || 'Request failed',
        data.details,
        requestId
      );

    } catch (error) {
      clearTimeout(timeoutId);

      // Handle timeout
      if (error instanceof Error && error.name === 'AbortError') {
        throw new ApiError(408, 'Request timeout', { timeout: this.timeout });
      }

      // Handle network errors
      if (error instanceof TypeError) {
        throw new ApiError(0, 'Network error. Please check your connection.');
      }

      // Re-throw API errors
      if (error instanceof ApiError) {
        throw error;
      }

      // Unknown error
      throw new ApiError(500, 'An unexpected error occurred');
    }
  }

  /**
   * Delay helper for retry logic
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * GET request
   */
  async get(endpoint: string): Promise<any> {
    return this.request(endpoint, { method: 'GET' });
  }

  /**
   * POST request
   */
  async post(endpoint: string, data?: any): Promise<any> {
    return this.request(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PUT request
   */
  async put(endpoint: string, data: any): Promise<any> {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * PATCH request
   */
  async patch(endpoint: string, data: any): Promise<any> {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  /**
   * DELETE request
   */
  async delete(endpoint: string): Promise<any> {
    return this.request(endpoint, { method: 'DELETE' });
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AUTHENTICATION METHODS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  /**
   * Login
   */
  async login(email: string, password: string): Promise<{ token: string; admin: any }> {
    const response = await this.post('/api/v1/auth/login', {
      email: email.trim().toLowerCase(),
      password: password.trim(),
    });

    if (response.success && response.data.token) {
      this.setToken(response.data.token);
    }

    return response.data;
  }

  /**
   * Logout
   */
  logout(): void {
    this.removeToken();
    if (typeof window !== 'undefined') {
      window.location.href = '/admin/login';
    }
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    return !this.isTokenExpired(token);
  }

  /**
   * Get current user
   */
  async getCurrentUser(): Promise<any> {
    return this.get('/api/v1/auth/me');
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // WAITLIST METHODS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  /**
   * Submit waitlist entry
   */
  async submitWaitlist(data: { email: string; name?: string }): Promise<any> {
    return this.post('/api/v1/waitlist', {
      email: data.email.trim().toLowerCase(),
      name: data.name?.trim(),
    });
  }

  /**
   * Get all waitlist entries (admin only)
   */
  async getWaitlist(): Promise<any[]> {
    const response = await this.get('/api/v1/waitlist');
    return response.data;
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BLOG METHODS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  /**
   * Get all blog posts
   */
  async getBlogPosts(published?: boolean): Promise<any[]> {
    const query = published !== undefined ? `?published=${published}` : '';
    const response = await this.get(`/api/v1/blog${query}`);
    return response.data;
  }

  /**
   * Get single blog post
   */
  async getBlogPost(slug: string): Promise<any> {
    const response = await this.get(`/api/v1/blog/${slug}`);
    return response.data;
  }

  /**
   * Create blog post (admin only)
   */
  async createBlogPost(data: any): Promise<any> {
    const response = await this.post('/api/v1/blog', data);
    return response.data;
  }

  /**
   * Update blog post (admin only)
   */
  async updateBlogPost(id: number, data: any): Promise<any> {
    const response = await this.put(`/api/v1/blog/${id}`, data);
    return response.data;
  }

  /**
   * Delete blog post (admin only)
   */
  async deleteBlogPost(id: number): Promise<void> {
    await this.delete(`/api/v1/blog/${id}`);
  }
}

// Export singleton instance
export const api = new ApiClient();

// Export class for custom instances
export { ApiClient };