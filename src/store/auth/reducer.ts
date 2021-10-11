import { AnyAction } from 'redux';
import { AuthState } from './types';
import * as actionTypes from './actionTypes';

const initialState: AuthState = {
  isLoggedIn: false,
  isAdmin: false,
  loading: false,
};

const reducer = (state = initialState, action: AnyAction): AuthState => {
  switch (action.type) {
    case actionTypes.SET_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
