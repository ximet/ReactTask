import { useState } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core';
import { lightTheme, darkTheme } from 'theme';
import { THEME_STORAGE_NAME } from 'constants/localStorage';
import { DARK, LIGHT } from 'constants/theme';
import { ThemeContext } from './duck';

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => localStorage.getItem(THEME_STORAGE_NAME) || LIGHT);
  const currentTheme = { [LIGHT]: lightTheme, [DARK]: darkTheme }[themeName];

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <MUIThemeProvider theme={currentTheme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
