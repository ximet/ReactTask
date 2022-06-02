import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector(state => state.darkModeToggle.darkThemeEnabled);
  return (
    <ThemeProvider theme={{ theme: darkThemeEnabled ? 'dark' : 'light' }}>{children}</ThemeProvider>
  );
};

export default DarkThemeProvider;
