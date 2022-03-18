import React, { StrictMode, useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from '../store/store';
import { SnackbarContext, SnackbarType } from './contexts';

interface LauncherProps {
  children?: JSX.Element | JSX.Element[],
}

function Launcher({ children }: LauncherProps) {
  const [snackbar, setSnackbar] = useState<SnackbarType>({ isOpen: false, message: '' });

  return (
    <StrictMode>
      <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
        <Provider store={store}>
          {children}
        </Provider>
      </SnackbarContext.Provider>
    </StrictMode>
  );
}

Launcher.propTypes = { children: PropTypes.element.isRequired };

export default Launcher;
