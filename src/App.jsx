import React, { useEffect, useState } from 'react'; // нужно ли импортировать в каждый файл?
import { getToken, searchLocation } from './api';
import CurrentWeather from './components/CurrentWeather';
import SearchLocation from './components/SearchLocation';
import { url, authData } from './constants';

function App() {
  const [token, setToken] = useState('');
  const [coords, setCoords] = useState({});
  const [searchedLocation, setSearchedLocation] = useState({});

  navigator.geolocation.getCurrentPosition(
    pos => {
      setCoords(pos);
    },
    err => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  );

  const isSearchedLocationEmpty = Object.keys(searchedLocation).length === 0;

  const getSearchedLocation = location => {
    setSearchedLocation(location);
  };

  useEffect(() => {
    getToken(url, authData).then(token => setToken(token));
  }, []);

  return (
    <div>
      <SearchLocation token={token} getLocation={getSearchedLocation} />
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
