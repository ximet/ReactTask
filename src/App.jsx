import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import classes from './App.module.css';
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
        <Route exact path="/">
          <Home token={token} />
        </Route>
        <Route path="/info" component={Info} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
