import React, { useState } from 'react';

const SearchForm = ({ getLocation }) => {
  const [locationName, setLocationName] = useState('');

  const getLocationName = e => {
    e.preventDefault();

    getLocation(locationName);
    setLocationName('');
  };

  return (
    <form onSubmit={getLocationName}>
      <input
        onChange={e => setLocationName(e.target.value)}
        value={locationName}
        type="text"
        name="locationName"
        placeholder="Type a name of the location..."
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
