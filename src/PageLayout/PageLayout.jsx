import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { themes } from '../theme/theme';
import { GlobalStyles } from '../theme/global';
import { useThemeChange } from '../theme/useThemeChange';
import { Main } from './PageLayout.Styles';
import { LIGHT_THEME, DARK_THEME } from '../common/constants';

function PageLayout({ children }) {
  const [theme, setTheme] = useThemeChange();
  const currentTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
  const toggleTheme = () => setTheme(currentTheme);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
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
