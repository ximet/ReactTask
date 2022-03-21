import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import classes from './App.module.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import InfoPage from './views/InfoPage/InfoPage';
import FeedbackPage from './views/FeedbackPage/FeedbackPage';
import MainPage from './views/MainPage/MainPage';
import { useDispatch } from 'react-redux';
import { setTheme } from './store/actions';
import { setCSSVariables } from './utils';
import { getLocalStorageItem } from './utils/localStorage';
import { themes } from './contexts/themes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const themeName = getLocalStorageItem('theme') || 'light';

    dispatch(setTheme(themeName));
    setCSSVariables(themes[themeName]);
  }, []);

  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/location/:id">
            <MainPage />
          </Route>
          <Route path="/about">
            <InfoPage />
          </Route>
          <Route path="/feedback">
            <FeedbackPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
