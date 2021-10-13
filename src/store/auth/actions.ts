import { TOKEN } from 'constants/localStorage';
import { LoginSchema } from 'types/schemas';
import { authApi } from 'services/auth';
import * as actionTypes from './actionTypes';
import { AppThunk } from '../types';

export const setLoggedIn = (payload: boolean) => ({
  type: actionTypes.SET_LOGGED_IN,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: actionTypes.SET_LOADING,
  payload,
});

export const login: AppThunk<LoginSchema> = (payload) => (dispatch) => {
  dispatch(setLoading(true));

  return (
    authApi
      .login({ data: payload })
      .then((response) => {
        localStorage.setItem(TOKEN, response.data.access_token);
        dispatch(setLoggedIn(true));
      })
      // TODO: add error reducer
      .catch(() => {})
      .finally(() => dispatch(setLoading(false)))
  );
};
