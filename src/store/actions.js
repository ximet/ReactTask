import { SET_THEME, SET_LOCATION } from './types';

export const setTheme = theme => {
  return {
    type: SET_THEME,
    payload: theme
  };
};

export const setLocation = location => {
  return {
    type: SET_LOCATION,
    payload: location
  };
};
