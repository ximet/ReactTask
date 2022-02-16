import React, { useEffect, useState } from 'react';
import { url } from './constants';
import { getToken } from './api';
import CurrentWeather from './components/CurrentWeather';
import SearchLocation from './components/SearchLocation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import classes from './App.module.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import InfoPage from './views/InfoPage/InfoPage';
import FeedbackPage from './views/FeedbackPage/FeedbackPage';
import ListPage from './views/ListPage/ListPage';
import MainPage from './views/MainPage/MainPage';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    getToken(url).then(token => setToken(token));
    // set token to cookies
  }, []);

  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage token={token} />
          </Route>
          <Route path="/weather">
            <ListPage token={token} />
          </Route>
          <Route path="/about">
            <InfoPage token={token} />
          </Route>
          <Route path="/feedback">
            <FeedbackPage token={token} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
