import React, { useEffect, useState } from 'react'; // нужно ли импортировать в каждый файл?
import { getToken, searchLocation } from './api';
import CurrentWeather from './components/CurrentWeather';
import SearchLocation from './components/SearchLocation';
import { url, authData } from './constants';

function App() {
  const [token, setToken] = useState('');
  const [searchedLocation, setSearchedLocation] = useState({});

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
        <CurrentWeather token={token} locationId={searchedLocation.id} />
      )}
    </div>
  );
}

export default App;
