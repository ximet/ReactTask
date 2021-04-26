import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { themes } from '../theme/theme';
import { GlobalStyles } from '../theme/global';
import { useThemeChange } from '../theme/useThemeChange';
import { Main } from './PageLayout.Styles';

function PageLayout({ children }) {
  const [theme, setTheme] = useThemeChange();

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Header setTheme={setTheme} theme={theme} />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node
};

export default PageLayout;
