import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import classes from './App.module.css';
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
        <Route path="/" exact component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
