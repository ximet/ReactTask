import { createContext } from 'react';

type SnackbarType = {
  isOpen: boolean,
  message: string,
}

interface SnackbarContextInterface {
  snackbar: SnackbarType;
  setSnackbar: (newValue: SnackbarType) => void;
}

const SnackbarContext = createContext<SnackbarContextInterface>({ snackbar: { isOpen: false, message: '' }, setSnackbar: () => {} });

export { SnackbarContext, SnackbarType, SnackbarContextInterface };
