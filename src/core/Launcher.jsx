import React, { StrictMode, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from '../store/store';
import { SnackbarContext } from './contexts';

function Launcher({ children }) {
  const [snackbar, setSnackbar] = useState({ isOpen: false, message: '' });
  const memoizedSnackbar = useMemo(() => [snackbar, setSnackbar], [snackbar]);

  return (
    <StrictMode>
      <SnackbarContext.Provider value={memoizedSnackbar}>
        <Provider store={store}>
          {children}
        </Provider>
      </SnackbarContext.Provider>
    </StrictMode>
  );
}

Launcher.propTypes = { children: PropTypes.element.isRequired };

export default Launcher;
