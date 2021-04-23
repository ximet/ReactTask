import { useEffect, useState } from 'react';
import { DARK_MODE, LIGHT_MODE, CURRENT_THEME } from '../common/constants';

export const useThemeToggle = () => {
  const [theme, setTheme] = useState(LIGHT_MODE);

  const setMode = mode => {
    window.localStorage.setItem(CURRENT_THEME, mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    const themeModes = [LIGHT_MODE, DARK_MODE];
    const localTheme = window.localStorage.getItem(CURRENT_THEME);
    let currentIndex = themeModes.indexOf(localTheme);

    if (currentIndex === themeModes.length - 1) {
      setMode(themeModes[0]);
    } else {
      setMode(themeModes[++currentIndex]);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(CURRENT_THEME);
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode(LIGHT_MODE);
    }
  }, []);

  return [theme, toggleTheme];
};
