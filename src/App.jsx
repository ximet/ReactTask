import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Info from './views/Info/Info';
import Feedback from './views/Feedback/Feedback';
import weatherApi from './services/WeatherApi';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    weatherApi.getToken().then(accessToken => setToken(accessToken));
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/info" component={Info} />
        <Route path="/feedback" component={Feedback} />
        <Route exact path="/">
          <Home token={token} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
