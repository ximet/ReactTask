import { setThemeInterface, setTokenInterface } from './interfaces';
import { SET_THEME, SET_TOKEN } from './types';

function setTheme(theme: string): setThemeInterface {
  return {
    type: SET_THEME,
    payload: theme,
  };
}

function setToken(token: string): setTokenInterface {
  return {
    type: SET_TOKEN,
    payload: token,
  };
}

export { setTheme, setToken };
