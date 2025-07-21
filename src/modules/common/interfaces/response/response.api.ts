export interface Response<T> {
    success: boolean;
    data: T | null;
    error: { message: string } | null;
}