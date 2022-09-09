import { ActionType, Action } from '../actionTypes/auth';
import type { AccessToken } from '../../types';

interface AuthState {
  accessToken?: AccessToken;
  loading: boolean;
  error: string | null;
}

const initialState = {
  accessToken: null,
  loading: false,
  error: null
};

const authReducer = (state: AuthState = initialState, action: Action): AuthState => {
  switch (action.type) {
    case ActionType.AUTHORIZE_PENDING: {
      return {
        ...state,
        loading: true
      };
    }
    case ActionType.AUTHORIZE_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    case ActionType.AUTHORIZE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case ActionType.AUTHENTICATE_PENDING: {
      return {
        ...state,
        loading: true
      };
    }
    case ActionType.AUTHENTICATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        accessToken: action.payload
      };
    }
    case ActionType.AUTHENTICATE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default authReducer;
