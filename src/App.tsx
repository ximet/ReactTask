import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const App = (): JSX.Element => {
  const [city, setCity] = useState('London');
  const [data, setData] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      (async () => {
        const options = {
          method: 'POST',
          body: '',
          requestMode: 'no-cors',
          headers: { 'Content-Type': 'application/json' }
        };
        const response = await fetch('http://localhost:3000/auth', options);
        const json = await response.json();
        localStorage.setItem('token', json.access_token);
      })();
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const accessToken = localStorage.getItem('token');
        const options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        };
        const response = await fetch(
          `https://pfa.foreca.com/api/v1/location/search/${city}`,
          options
        );
        const json = await response.json();
        setData(JSON.stringify(json.locations));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <header>
        <h1>Nice Weather App</h1>
        <nav>
          <Link to="/cities">Cities</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </header>
      <h2>{city} info</h2>
      <div>{data}</div>
    </>
  );
};

export default App;
