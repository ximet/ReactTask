export interface LoginRequest {
  user?: string;
  password?: string;
}

export interface LoginResponse {
  data: Record<string, unknown>;
}

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
