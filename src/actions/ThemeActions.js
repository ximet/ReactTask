import {
  SET_THEME
} from '../actionTypes';

export const setTheme = themeName => ({
  type: SET_THEME,
  payload: { name: themeName }
});


