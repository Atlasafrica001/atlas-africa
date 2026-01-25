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
 * API Client Configuration
 */
interface ApiClientConfig {
  baseUrl?: string;
  timeout?: number;
  retryAttempts?: number;
}

/**
 * API Client with Cookie-Based Authentication
 * No more localStorage - all auth handled via httpOnly cookies
 */
class ApiClient {
  private baseUrl: string;
  private timeout: number;
  private retryAttempts: number;
  private isAuthenticatedCache: boolean = false;

  constructor(config: ApiClientConfig = {}) {
    this.baseUrl = config.baseUrl || 
      process.env.NEXT_PUBLIC_API_URL || 
      'https://atlas-africa-backend.onrender.com';
    this.timeout = config.timeout || 30000;
    this.retryAttempts = config.retryAttempts || 0;
  }

  /**
   * Generate unique request ID
   */
  private generateRequestId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get request headers
   */
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'X-Request-ID': this.generateRequestId(),
    };

    return headers;
  }

  /**
   * Make HTTP request
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
        credentials: 'include', // CRITICAL: Required for cookies
        headers: {
          ...this.getHeaders(),
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      const requestId = response.headers.get('X-Request-ID') || 'unknown';

      // No content
      if (response.status === 204) {
        return null;
      }

      const data = await response.json().catch(() => ({}));

      // Success
      if (response.ok) {
        // Update auth cache on successful auth endpoints
        if (endpoint.includes('/auth/login')) {
          this.isAuthenticatedCache = true;
        }
        return data;
      }

      // Authentication errors
      if (response.status === 401) {
        this.isAuthenticatedCache = false;
        if (typeof window !== 'undefined' && !endpoint.includes('/login')) {
          window.location.href = '/admin/login';
        }
      }

      // Rate limit - retry
      if (response.status === 429 && attempt < this.retryAttempts) {
        const retryAfter = parseInt(response.headers.get('Retry-After') || '5', 10);
        await this.delay(retryAfter * 1000);
        return this.request(endpoint, options, attempt + 1);
      }

      throw new ApiError(
        response.status,
        data.error || 'Request failed',
        data.details,
        requestId
      );

    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof Error && error.name === 'AbortError') {
        throw new ApiError(408, 'Request timeout', { timeout: this.timeout });
      }

      if (error instanceof TypeError) {
        throw new ApiError(0, 'Network error. Please check your connection.');
      }

      if (error instanceof ApiError) {
        throw error;
      }

      throw new ApiError(500, 'An unexpected error occurred');
    }
  }

  /**
   * Delay helper
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
  // AUTHENTICATION METHODS (Cookie-Based)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  /**
   * Login - No token returned, set in httpOnly cookie
   */
  async login(email: string, password: string): Promise<{ admin: any }> {
    const response = await this.post('/api/v1/auth/login', {
      email: email.trim().toLowerCase(),
      password: password.trim(),
    });

    this.isAuthenticatedCache = true;
    return response.data;
  }

  /**
   * Logout - Clear cookie
   */
  async logout(): Promise<void> {
    try {
      await this.post('/api/v1/auth/logout');
    } catch (error) {
      // Logout anyway even if request fails
      console.error('Logout request failed:', error);
    } finally {
      this.isAuthenticatedCache = false;
      if (typeof window !== 'undefined') {
        window.location.href = '/admin/login';
      }
    }
  }

  /**
   * Check if authenticated
   * Makes a request to /me endpoint to verify cookie
   */
  async isAuthenticated(): Promise<boolean> {
    try {
      await this.getCurrentUser();
      this.isAuthenticatedCache = true;
      return true;
    } catch (error) {
      this.isAuthenticatedCache = false;
      return false;
    }
  }

  /**
   * Get current user (verifies auth)
   */
  async getCurrentUser(): Promise<any> {
    const response = await this.get('/api/v1/auth/me');
    return response.data.admin;
  }

  /**
   * Refresh token
   */
  async refreshToken(): Promise<void> {
    await this.post('/api/v1/auth/refresh');
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
