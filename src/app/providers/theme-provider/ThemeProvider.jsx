import { ThemeProvider as StyleComponentThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'theme';
import { THEME_STORAGE_NAME } from 'constants/localStorage';
import { DARK, LIGHT } from 'constants/theme';
import { useLocalStorage } from 'hooks';
import { ThemeContext } from './duck';

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useLocalStorage(THEME_STORAGE_NAME, LIGHT);

  const currentTheme = { [LIGHT]: lightTheme, [DARK]: darkTheme }[themeName];

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <StyleComponentThemeProvider theme={currentTheme}>
        {children}
      </StyleComponentThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
