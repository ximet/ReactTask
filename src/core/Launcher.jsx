import React, { StrictMode, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { SnackbarContext, ThemeContext } from './contexts';
import { getLocalstorageItem, setLocalstorageItem } from '../utils/localStorage';
import changeCssRootVariables from '../utils/changeCssRootVariables';

function Launcher({ children }) {
  const [snackbar, setSnackbar] = useState({ isOpen: false, message: '' });
  const memoizedSnackbar = useMemo(() => [snackbar, setSnackbar], [snackbar]);

  const [theme, setTheme] = useState(getLocalstorageItem('theme') || 'light');

  changeCssRootVariables(theme);

  const changeTheme = () => {
    const newTheme = (theme === 'light') ? 'dark' : 'light';

    setTheme(newTheme);
    changeCssRootVariables(newTheme);
    setLocalstorageItem('theme', newTheme);
  };

  return (
    <StrictMode>
      <SnackbarContext.Provider value={memoizedSnackbar}>
        <ThemeContext.Provider value={{ theme, changeTheme }}>
          {children}
        </ThemeContext.Provider>
      </SnackbarContext.Provider>
    </StrictMode>
  );
}

Launcher.propTypes = { children: PropTypes.element.isRequired };

export default Launcher;
