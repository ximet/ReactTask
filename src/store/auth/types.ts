import { RootState } from '../types';

export interface AuthState {
  isLoggedIn: boolean;
  isAdmin: boolean;
  loading: boolean;
}

export type GetAuth = (state: RootState) => AuthState;
