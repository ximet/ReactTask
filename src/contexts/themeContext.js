import { createContext } from 'react';

export const ThemeSelectorContext = createContext({
  theme: 'dark',
  toggleTheme: () => {}
});
