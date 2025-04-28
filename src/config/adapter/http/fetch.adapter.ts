import { HttpAdapter } from "./http.adapter";

export class FetchAdapter implements HttpAdapter {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request<T>(url: string, options?: RequestInit): Promise<T> {
    console.log({ options });

    const response = await fetch(`${this.baseUrl}${url}`, options);
    const data = await response.json();

    console.log({ response });

    if (!response.ok) {
      throw new Error(data?.message);
    }

    return data;
  }
}
