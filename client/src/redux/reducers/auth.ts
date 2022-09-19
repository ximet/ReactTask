import type { AccessToken } from 'types';
import { ActionType, Action } from '../actionTypes/auth';

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
    case ActionType.AUTHORIZE_PENDING || ActionType.AUTHENTICATE_PENDING: {
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
    case ActionType.AUTHORIZE_FAIL || ActionType.AUTHENTICATE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case ActionType.AUTHENTICATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        accessToken: action.payload.data.token
      };
    }
    default:
      return state;
  }
};

export default authReducer;
