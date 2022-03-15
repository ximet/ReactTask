import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import classes from './App.module.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import InfoPage from './views/InfoPage/InfoPage';
import FeedbackPage from './views/FeedbackPage/FeedbackPage';
import MainPage from './views/MainPage/MainPage';

function App() {
  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <Switch>
          <Route exact path="/">
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
