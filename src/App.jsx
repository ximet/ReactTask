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
  const [userCoords, setUserCoords] = useState();
  const [testLocation, setTestResults] = useState();

  const req = async () => {
    await axios
      .post('http://localhost:3000/test-url', {
        headers: { 'Content-Type': 'text/html; charset=UTF-8' },
        body: JSON.stringify(authenticated)
      })
      .then(response => setTestResults(response.data))
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };

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

  useEffect(() => {
    if (!authenticated || userCoords) return;

    if ('geolocation' in navigator) {

      navigator.geolocation.getCurrentPosition(function (position) {
        const userCoordinates = { latLon: position.coords.longitude + ',' + position.coords.latitude };

        (async function getPin() {
          await axios
            .post('http://localhost:3000/get-current-location-params', userCoordinates, {
              headers: { 'Content-Type': 'application/json; charset=UTF-8' }
            })
            .then(data => setUserCoords(data));
        })();

      });

    } else {
      alert('Location Not Available');
    }
  }, [authenticated]);

  return (
    <Router>
      <Navigation />
      <button onClick={req}>test request</button>
      {testLocation ? JSON.stringify(testLocation) : null}
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
