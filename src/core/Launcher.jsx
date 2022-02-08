import React, { StrictMode, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { SnackbarContext, WorldWeatherContext } from './contexts';

function Launcher({ children }) {
  const [snackbar, setSnackbar] = useState({ isOpen: false, message: '' });
  const memoizedSnackbar = useMemo(() => [snackbar, setSnackbar], [snackbar]);

  const [worldWeather, setWorldWeather] = useState([]);
  const memoizedWorldWeather = useMemo(() => [worldWeather, setWorldWeather], [worldWeather]);

  return (
    <StrictMode>
      <SnackbarContext.Provider value={memoizedSnackbar}>
        <WorldWeatherContext.Provider value={memoizedWorldWeather}>
          {children}
        </WorldWeatherContext.Provider>
      </SnackbarContext.Provider>
    </StrictMode>
  );
}

Launcher.propTypes = { children: PropTypes.element.isRequired };

export default Launcher;
