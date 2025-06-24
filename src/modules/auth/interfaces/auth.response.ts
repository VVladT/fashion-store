export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface UserInfoResponse {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
}