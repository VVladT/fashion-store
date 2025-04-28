export interface Response<T> {
    success: boolean;
    data: T | null;
    error: any | null;
}