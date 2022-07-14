import React, { useEffect, useState } from 'react';
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
export interface ThemeContextConfig {
  theme: Theme;
  toggleTheme?: () => void;
}
const getTheme = (): Theme => {
  const themeString: string | null = localStorage.getItem('theme');
  if (!themeString || themeString === Theme.LIGHT) {
    return Theme.LIGHT;
  } else {
    return Theme.DARK;
  }
};
export const ThemeContext = React.createContext<ThemeContextConfig>({
  theme: Theme.LIGHT,
  toggleTheme: () => {}
});

export const ThemeProvider: React.FunctionComponent<{ children?: React.ReactNode }> = ({
  children
}) => {
  const [theme, setTheme] = useState<Theme>(getTheme);
  const toggleTheme = (): void => {
    theme === Theme.LIGHT ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT);
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
