import React, { useEffect, useState } from 'react';
import { searchLocation } from '../api';
import { url } from '../constants';
import SearchForm from './SearchForm';

const SearchLocation = ({ token, updateSearchedLocation }) => {
  const [location, setLocation] = useState({});

  const updateLocation = (locationName) => {
    searchLocation(url, token, locationName).then(location => {
      if (location) {
        setLocation(location);
        updateSearchedLocation(location);
      }
    });
  }

  return (
    <div>
      <h2>Search</h2>
      <SearchForm updateLocation={updateLocation} />
      <pre>{Object.keys(location).length === 0 ? '' : JSON.stringify(location, null, 2)}</pre>
    </div>
  );
};

export default SearchLocation;
