import React from 'react';
import SearchBar from '../Components/SearchBar';
import data from '../data.json';

const CitySearch = () => {
  return (
    <div>
      CitySearch
      <SearchBar placeholder="Enter a City name..." data={data} />
    </div>
  );
};

export default CitySearch;
