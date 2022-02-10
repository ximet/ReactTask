import { createContext } from 'react';

const SnackbarContext = createContext({ isOpen: false, message: '' });
const ThemeContext = createContext({ theme: 'light', setTheme: () => {} });

export { SnackbarContext, ThemeContext };
