import { ThemeType } from './themeReducer';

export const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = (theme: ThemeType) => ({
  type: TOGGLE_THEME,
  payload: theme
});
