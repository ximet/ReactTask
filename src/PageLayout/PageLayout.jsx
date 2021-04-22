import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { lightTheme, darkTheme } from '../theme/theme';
import { GlobalStyles } from '../theme/global';
import { useDarkMode } from '../theme/useDarkMode';
import { DivMain } from './PageLayout.Styles';

function PageLayout({ children }) {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <DivMain>{children}</DivMain>
      <Footer />
    </ThemeProvider>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node
};

export default PageLayout;
