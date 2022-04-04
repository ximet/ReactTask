import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Feedback from './views/Feedback/Feedback';
import Home from './views/Home/Home';
import Info from './views/Info/Info';
import ScrollToTop from './helpers/scrollToTop';
import BackgroundImage from './atomic-components/BackgroundImage/BackgroundImage';

function App() {
  return (
    <Router>
      <BackgroundImage />
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/location/:id">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
