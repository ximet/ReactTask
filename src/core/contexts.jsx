import { createContext } from 'react';

export const SnackbarContext = createContext({ isOpen: false, message: ''});
