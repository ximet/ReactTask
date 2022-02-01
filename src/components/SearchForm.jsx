import React, { useState } from 'react';

const SearchForm = ({ updateLocation }) => {
  const [locationName, setLocationName] = useState('');

  const onSearchSubmit = e => {
    e.preventDefault();

    updateLocation(locationName);
    setLocationName('');
  };

  return (
    <form onSubmit={onSearchSubmit}>
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
