export abstract class HttpAdapter {
  abstract request<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}