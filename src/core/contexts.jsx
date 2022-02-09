/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';

const SnackbarContext = createContext({ isOpen: false, message: '' });

export { SnackbarContext };
