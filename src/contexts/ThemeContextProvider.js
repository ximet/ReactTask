import React, { useState, useEffect } from 'react';
import { setCSSVariables } from '../utils';
import { ThemeSelectorContext } from './themeContext';
import { themes } from './themes';

function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useState('dark');
  const [theme, setTheme] = useState(themes[themeName]);

  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
      setThemeName('light');
    } else {
      setTheme(themes.dark);
      setThemeName('dark');
    }
  };

  useEffect(() => {
    setCSSVariables(theme);
  });

  return (
    <ThemeSelectorContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeSelectorContext.Provider>
  );
}

export default ThemeContextProvider;
