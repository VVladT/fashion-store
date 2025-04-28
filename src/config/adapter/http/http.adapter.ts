export abstract class HttpAdapter {
  abstract request<T>(url: string, options?: any): Promise<T>;
}