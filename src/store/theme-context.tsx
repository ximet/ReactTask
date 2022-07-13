import React, { useEffect, useState } from 'react';

export interface ThemeContextConfig {
  theme: string;
  toggleTheme?: () => void;
}

const themes: {
  light: '';
  dark: 'dark';
} = {
  light: '',
  dark: 'dark'
};

const getTheme = (): string => {
  const theme: string | null = localStorage.getItem('theme');
  if (!theme) {
    localStorage.setItem('theme', themes.light);
    return themes.light;
  } else return theme;
};

export const ThemeContext = React.createContext<ThemeContextConfig>({
  theme: '',
  toggleTheme: () => {}
});

export const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState<string>(getTheme);

  const toggleTheme = (): void => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
