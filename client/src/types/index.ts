export interface AuthorizationRequest {
  user?: string;
  password?: string;
}

export interface AuthorizationResponse {
  status: 'success' | 'fail';
}
export interface AuthenticationResponse {
  status: 'success' | 'fail';
  token: string;
}

export type AccessToken = null | string;

export interface LocationInfo {
  id: number;
  name: string;
  country: string;
  timezone: string;
  language: string;
  adminArea: string;
  adminArea2?: string;
  adminArea3?: string;
  lon: number;
  lat: number;
  state?: string;
}

export interface StylesProps {
  theme: 'light' | 'dark';
}
