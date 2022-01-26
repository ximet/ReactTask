import React, { useEffect, useState } from 'react';
import { searchLocation } from '../api';
import { url } from '../constants';
import SearchForm from './SearchForm';

const SearchLocation = ({ token }) => {
  const [location, setLocation] = useState({});

  const searchLocationInfo = locationName => {
    searchLocation(url, token, locationName).then(location => setLocation(location));
  };

  useEffect(() => {
    console.log('SearchLocation did mount.');
  }, []);

  return (
    <div>
      <h2>Search</h2>
      <SearchForm getLocation={searchLocationInfo} />
      <pre>{JSON.stringify(location, null, 2)}</pre>
    </div>
  );
};

export default SearchLocation;
