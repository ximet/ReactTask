import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

const themes = {
  light: '',
  dark: 'dark'
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');
  const toggleDark = () => (theme === themes.dark ? setTheme('') : setTheme(themes.dark));

  return <ThemeContext.Provider value={{ theme, toggleDark }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
