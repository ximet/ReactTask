import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navigation from './components/NavBar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactsPage from './pages/Contacts';
import DetailedPage from './pages/DetailedPage'
import './css/index.scss';

export default function App() {
  const [authenticated, setAuth] = useState();
  const [userCoords, setUserCoords] = useState();

  const req = async () => {
    await fetch('http://localhost:3000/test-url', {
      headers: { 'Content-Type': 'text/html; charset=UTF-8' },
      method: 'POST',
      body: JSON.stringify(authenticated)
    })
      .then(response => response.json())
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };

  useEffect(() => {
    async function attemptLogin() {
      await fetch('http://localhost:3000/login')
        .then(response => response.json())
        .then(data => setAuth(JSON.stringify(data.data)))
        .catch(err => {
          console.error('error occured: ', err.message)
        });
    }
    attemptLogin();
  }, []);

  useEffect(() => {

    if (!authenticated || userCoords) return;

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const userCoordinates = { latLon: position.coords.longitude + ',' + position.coords.latitude };

        async function getPin() {
          await fetch('http://localhost:3000/get-current-location-params', {
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            method: 'POST',
            body: JSON.stringify(userCoordinates)
          })
            .then(response => response.json())
            .then(data => setUserCoords(data));
        }
        getPin();
      });

    } else {
      alert('Location Not Available');
    }

  }, [authenticated]);

  return (
    <Router>
      <Navigation />
      <button onClick={req}>test request</button>
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
