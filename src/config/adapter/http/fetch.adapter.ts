import { HttpAdapter } from "./http.adapter";

export class FetchAdapter implements HttpAdapter {
  private baseUrl: string;
  private getToken?: () => Promise<string | null>;

  constructor(baseUrl: string, getToken?: () => Promise<string | null>) {
    this.baseUrl = baseUrl;
    this.getToken = getToken;
  }

  async request<T>(url: string, options?: RequestInit): Promise<T> {
    const headers = new Headers(options?.headers || {});

    const token = await this.getToken?.();
    
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    const response = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers,
    });
    
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message);
    }

    return data;
  }
}
