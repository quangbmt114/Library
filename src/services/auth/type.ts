export interface LoginPayload {
  email: string;
  password: string;
}
export interface SignUpPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  message: string;
  access_token: string;
}
