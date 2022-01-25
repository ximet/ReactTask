import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainPage from '../../components/MainPage/MainPage';
import InfoPage from '../../components/InfoPage/InfoPage';
import FeedbackPage from '../../components/FeedbackPage/FeedbackPage';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/info">
              <InfoPage />
            </Route>
            <Route exact path="/feedback">
              <FeedbackPage />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
