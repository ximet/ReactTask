import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { getFromLocalStorage, setInLocalStorage } from '../services/localStorage';

type ThemeContextValueType = {
  theme: string;
  toggleTheme: () => void;
};

const themeContextValue: ThemeContextValueType = {
  theme: 'light',
  toggleTheme: () => {}
};

export const themeContext = createContext<ThemeContextValueType>(themeContextValue);

const getTheme = (): string => {
  const theme = getFromLocalStorage('theme') || 'light';
  document.body.dataset.theme = theme;
  return theme;
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(getTheme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setInLocalStorage(theme, 'theme');
    document.body.dataset.theme = theme;
  }, [theme]);

  const { Provider } = themeContext;

  return <Provider value={{ theme, toggleTheme }}>{children}</Provider>;
};
