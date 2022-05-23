import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import CitySearch from './Pages/CitySearch';
import Favourites from './Pages/Favourites';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/cities"> Search</Link>
            <Link to="/favourites"> Favourites</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cities" exact component={CitySearch} />
        <Route path="/favourites" exact component={Favourites} />
      </Switch>
    </Router>
  );
}

export default App;
