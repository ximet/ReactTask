import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactsPage from './pages/Contacts';
import DetailedPage from './pages/DetailedPage';
import './css/index.scss';
import axios from 'axios';
import { TemperatureContext } from './Context';

export default function App() {
  const [authenticated, setAuth] = useState();
  const [theme, setTheme] = useState();
  const [temperature, setTemperature] = useState();

  useEffect(() => {
    (async function attemptLogin() {
      await axios
        .get('http://localhost:3000/login')
        .then(data => setAuth(JSON.stringify(data.data)))
        .catch(err => {
          console.error('error occured: ', err.message);
        });
    })();
    if (sessionStorage.getItem('temp')) setTemperature(sessionStorage.getItem('temp'));
  }, []);

  useEffect(() => {
    const cashedTheme = sessionStorage.getItem('theme');
    const themeElement = document.getElementById('app');
    if (!theme) {
      if (!!cashedTheme) {
        themeElement.dataset.theme = cashedTheme;
        setTheme(cashedTheme);
      } else {
        themeElement.dataset.theme = 'light';
      }
    } else {
      sessionStorage.setItem('theme', theme);
      document.getElementById('app').dataset.theme = theme;
    }
  }, [theme]);

  useEffect(() => {
    if (!temperature) return;
    sessionStorage.setItem('temp', temperature);
  }, [temperature]);

  return (
    <Router>
      <TemperatureContext.Provider value={{ temperature, setTemperature }} >
        <Navigation currentTheme={theme} changeTheme={setTheme} />
        <div className="page container">
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/location/:locationId">
            <DetailedPage />
          </Route>
        </div>
      </TemperatureContext.Provider>
    </Router>
  );
}
