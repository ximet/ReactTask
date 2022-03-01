import { createContext } from 'react';

export const ThemeTypes = {
  dark: 'dark',
  light: 'light'
};

export const ThemeContext = createContext({
  theme: '',
  changeTheme: () => {}
});

