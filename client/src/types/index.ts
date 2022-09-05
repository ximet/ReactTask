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

export interface SearchResult {
  adminArea: string;
  adminArea2?: string;
  adminArea3?: string;
  country: string;
  id: number;
  language: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
  timezone: string;
}

export interface StylesProps {
  theme: 'light' | 'dark';
}
