/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';

const SnackbarContext = createContext({ isOpen: false, message: '' });
const ThemeContext = createContext({ theme: 'light', setTheme: () => {} });

export { SnackbarContext, ThemeContext };
