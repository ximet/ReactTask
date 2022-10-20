import React, { createContext } from 'react';

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {}
});
