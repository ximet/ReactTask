import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import FeedbackPage from '../pages/FeedbackPage/FeedbackPage';

function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/feedback" component={FeedbackPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation;
