import { TOGGLE_THEME } from './themeAction';

interface ThemeAction {
  type: string;
  payload: ThemeType;
}

export type ThemeType = 'light' | 'dark';

export const themeReducer = (state: ThemeType = 'light', action: ThemeAction) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return action.payload;
    default:
      return state;
  }
};
