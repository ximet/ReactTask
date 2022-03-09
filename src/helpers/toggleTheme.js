import lightBgImage from '../../public/images/light_bg.jpg';
import darkBgImage from '../../public/images/dark_bg.jpg';

export const THEME = {
  light: 'light',
  dark: 'dark'
};

export const BG_IMAGE = {
  light: lightBgImage,
  dark: darkBgImage
};

export const setTheme = themeName => {
  localStorage.setItem('theme', themeName);
};

export const toggleTheme = () => {
  const newTheme = localStorage.getItem('theme') === THEME.dark ? THEME.light : THEME.dark;

  return newTheme;
};

export const getDefaultTheme = () => localStorage.getItem('theme') || THEME.light;
