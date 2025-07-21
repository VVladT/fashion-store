export abstract class HttpAdapter {
  abstract request<T>(url: string, options?: Record<string, string>): Promise<T>;
}