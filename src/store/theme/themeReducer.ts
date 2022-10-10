import { TOGGLE_THEME } from './themeAction';

interface ThemeAction {
  type: string;
}

export type ThemeType = 'light' | 'dark';

export const themeReducer = (state: ThemeType = 'light', action: ThemeAction) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const theme = state === 'light' ? 'dark' : 'light';
      return (state = theme);
    default:
      return state;
  }
};
