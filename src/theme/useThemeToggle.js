import { useEffect, useState } from 'react';
import { darkMode, lightMode, currentTheme } from '../common/constants';

export const useThemeToggle = () => {
  const [theme, setTheme] = useState(lightMode);

  const setMode = mode => {
    window.localStorage.setItem(currentTheme, mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === lightMode) {
      setMode(darkMode);
    } else {
      setMode(lightMode);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(currentTheme);
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode(lightMode);
    }
  }, []);

  return [theme, toggleTheme];
};
