import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Info from './views/Info/Info';
import Feedback from './views/Feedback/Feedback';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/info" component={Info} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
