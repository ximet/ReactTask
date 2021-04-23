import { useState } from 'react';
import { LIGHT_THEME, CURRENT_THEME } from '../common/constants';

export const useThemeChange = (defaultTheme = LIGHT_THEME) => {
  const [theme, setTheme] = useState(window.localStorage.getItem(CURRENT_THEME) || defaultTheme);

  const changeTheme = theme => {
    window.localStorage.setItem(CURRENT_THEME, theme);
    setTheme(theme);
  };

  return [theme, changeTheme];
};
