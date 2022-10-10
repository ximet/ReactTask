import { getFromLocalStorage, setInLocalStorage, THEME_LS_LABEL } from 'services/localStorage';
import { ThemeType } from './theme/themeReducer';

export const loadThemeState = (): ThemeType =>
  (getFromLocalStorage(THEME_LS_LABEL) as ThemeType) || 'light';

export const saveThemeState = (state: string) => {
  setInLocalStorage(state, THEME_LS_LABEL);
};
