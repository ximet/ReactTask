import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';

function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation;
