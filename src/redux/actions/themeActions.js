import { SET_CURRENT_THEME } from '../types/themeTypes';

export const setCurrentTheme = theme => ({
  type: SET_CURRENT_THEME,
  payload: { themeName: theme }
});
