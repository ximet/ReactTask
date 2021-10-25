import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './assets/styles/constants/theme.css';

import Header from './Layouts/Header/Header';
import Main from './layouts/Main/Main';
import Footer from './layouts/Footer/Footer';
import { initApp } from './redux/actions/initAppActions';

function App({ theme, initApp }) {
  useEffect(() => {
    initApp();
  }, []);

  return (
    <BrowserRouter>
      <div className={theme}>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  theme: state.theme.currentTheme
});

const mapDispatchToProps = dispatch => {
  return {
    initApp: location => dispatch(initApp(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
