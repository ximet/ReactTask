import { SET_THEME, SET_TOKEN } from './types';

function setTheme(theme) {
  return {
    type: SET_THEME,
    payload: theme,
  };
}

function setToken(token) {
  return {
    type: SET_TOKEN,
    payload: token,
  };
}

export { setTheme, setToken };
