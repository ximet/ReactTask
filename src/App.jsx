import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navigation from './components/NavBar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactsPage from './pages/Contacts';
import DetailedPage from './pages/DetailedPage';
import './css/index.scss';
import axios from 'axios';

export default function App() {
  const [authenticated, setAuth] = useState();

  useEffect(() => {
    (async function attemptLogin() {
      await axios
        .get('http://localhost:3000/login')
        .then(data => setAuth(JSON.stringify(data.data)))
        .catch(err => {
          console.error('error occured: ', err.message);
        });
    })();
  }, []);

  return (
    <Router>
      <Navigation />
      <div className="page container">
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/location/:locationId">
          <DetailedPage />
        </Route>
      </div>
    </Router>
  );
}
