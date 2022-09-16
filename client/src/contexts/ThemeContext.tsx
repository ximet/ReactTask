import React, { FC, createContext, useState, useMemo } from 'react';

export type ThemeContextData = {
  darkMode: boolean;
  icon: boolean;
  setDarkMode: (darkMode: boolean) => void;
  setIcon: (icon: boolean) => void;
};

const DarkLightThemeContext = createContext<ThemeContextData>({
  darkMode: false,
  icon: false,
  setDarkMode: () => {
    return null;
  },
  setIcon: () => {
    return null;
  }
});

export const ThemeProvider: FC<React.ReactNode> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [icon, setIcon] = useState<boolean>(false);

  const darkLightThemeContext = useMemo(() => {
    return { darkMode, setDarkMode, icon, setIcon };
  }, [darkMode, icon]);

  return (
    <DarkLightThemeContext.Provider value={darkLightThemeContext}>
      {children}
    </DarkLightThemeContext.Provider>
  );
};

export default DarkLightThemeContext;
