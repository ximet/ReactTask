import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Info from './views/Info/Info';
import Feedback from './views/Feedback/Feedback';
import { weatherApi } from './services/WeatherApi';
import ScrollToTop from './helpers/scrollToTop';
import { THEME, getDefaultTheme } from './helpers/toggleTheme';
import { tokenSelector } from './redux/selectors/tokenSelector';
import { setToken } from './redux/actions/tokenActions';

function App() {
  const { token } = useSelector(tokenSelector);
  const [theme, setTheme] = useState(getDefaultTheme);
  const dispatch = useDispatch();

  function toggleTheme() {
    const newTheme = localStorage.getItem('theme') === THEME.dark ? THEME.light : THEME.dark;

    setTheme(newTheme);
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    weatherApi.getToken().then(accessToken => dispatch(setToken(accessToken)));
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <NavBar token={token} theme={theme} onToggleTheme={toggleTheme} />
      <Switch>
        <Route path="/info">
          <Info theme={theme} />
        </Route>
        <Route path="/feedback" component={Feedback} />
        <Route exact path="/">
          <Home token={token} theme={theme} />
        </Route>
        <Route exact path="/location/:id">
          <Home token={token} theme={theme} />
        </Route>
      </Switch>
      <Footer theme={theme} />
    </Router>
  );
}

export default App;
