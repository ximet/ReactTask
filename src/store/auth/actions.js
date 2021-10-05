import { TOKEN } from 'constants/localStorage';
import * as authApi from 'services/auth/api';
import * as actionTypes from './types';

export const setLoggedIn = (payload) => ({
  type: actionTypes.SET_LOGGED_IN,
  payload,
});

export const setLoading = (payload) => ({
  type: actionTypes.SET_LOADING,
  payload,
});

export const login = (payload) => (dispatch) => {
  dispatch(setLoading(true));

  return (
    authApi
      .login(payload)
      .then((response) => {
        localStorage.setItem(TOKEN, response.access_token);
        setLoggedIn(true);
      })
      // TODO: add error reducer
      .catch(() => {})
      .finally(() => dispatch(setLoading(false)))
  );
};
