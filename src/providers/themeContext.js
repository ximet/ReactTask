import React, { useState } from 'react';
import { THEME, getDefaultTheme } from '../helpers/toggleTheme';

export const ThemeContext = React.createContext({
  theme: THEME.light,
  bgTheme: THEME.light,
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getDefaultTheme);
  const [bgTheme, setBgImage] = useState(getDefaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === THEME.light ? THEME.dark : THEME.light;

    localStorage.setItem('theme', newTheme);

    setTheme(newTheme);
    setBgImage(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, bgTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
