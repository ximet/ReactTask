import { getFromLocalStorage, setInLocalStorage, THEME_LS_LABEL } from 'services/localStorage';
import { TOGGLE_THEME } from './themeAction';

interface ThemeAction {
  type: string;
}

type ThemeType = 'light' | 'dark';

const getTheme = (): ThemeType => {
  const theme = (getFromLocalStorage(THEME_LS_LABEL) as ThemeType) || 'light';
  document.body.dataset.theme = theme;
  return theme;
};

export const themeReducer = (state: ThemeType = getTheme(), action: ThemeAction) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const theme = state === 'light' ? 'dark' : 'light';
      setInLocalStorage(theme, THEME_LS_LABEL);
      document.body.dataset.theme = theme;
      return (state = theme);
    default:
      return state;
  }
};
