import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Storage } from '../services/localStorage';

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(Storage.getTheme());

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default DarkModeProvider;
