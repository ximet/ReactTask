import { createSelector } from 'reselect';
import { THEMES, BG_IMAGES } from '../../constants/themes';

const getTheme = state => state.theme.currentTheme;

export const getCurrentBgImage = createSelector([getTheme], theme =>
  theme === THEMES.light ? BG_IMAGES.light : BG_IMAGES.dark
);
