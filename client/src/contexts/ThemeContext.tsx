import React, { FC, createContext, useState } from 'react';

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

  return (
    <DarkLightThemeContext.Provider value={{ darkMode, setDarkMode, icon, setIcon }}>
      {children}
    </DarkLightThemeContext.Provider>
  );
};

export default DarkLightThemeContext;
