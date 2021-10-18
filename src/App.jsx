import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { THEMES } from './constants/themes';
import './assets/styles/constants/theme.css';

import Header from './Layouts/Header/Header';
import Main from './layouts/Main/Main';
import Footer from './layouts/Footer/Footer';

function App({ theme }) {
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className={theme}>
        <Header />
        <Main theme={theme} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  theme: state.theme.currentTheme
});

export default connect(mapStateToProps)(App);
