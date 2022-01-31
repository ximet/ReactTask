import React, { useEffect, useState } from 'react';
import { url } from './constants';
import { getToken } from './api';
import CurrentWeather from './components/CurrentWeather';
import SearchLocation from './components/SearchLocation';

function App() {
  const [token, setToken] = useState('');
  const [coords, setCoords] = useState({});
  const [searchedLocation, setSearchedLocation] = useState({});

  const isSearchedLocationEmpty = Object.keys(searchedLocation).length === 0;

  const updateSearchedLocation = location => {
    setSearchedLocation(location);
  };

  useEffect(() => {
    getToken(url).then(token => setToken(token));
    navigator.geolocation.getCurrentPosition(
      pos => {
        setCoords(pos.coords);
      },
      err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    );
  }, []);

  return (
    <div>
      <SearchLocation token={token} updateSearchedLocation={updateSearchedLocation} />
      {isSearchedLocationEmpty ? (
        ''
      ) : (
        <CurrentWeather
          title={'Current weather from searched location'}
          token={token}
          locationId={searchedLocation.id}
        />
      )}
      <CurrentWeather title={'Current weather from your location'} token={token} coords={coords} />
    </div>
  );
}

export default App;
