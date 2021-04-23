import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { themes } from '../theme/theme';
import { GlobalStyles } from '../theme/global';
import { useThemeToggle } from '../theme/useThemeToggle';
import { Main } from './PageLayout.Styles';

function PageLayout({ children }) {
  const [theme, toggleTheme] = useThemeToggle();
  const themeMode = themes[theme];
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node
};

export default PageLayout;
