import React from 'react';
import MultiWeather from '../Components/MultiCard';
import SearchBar from '../Components/SearchBar';

const CitySearch = () => {
  return (
    <div>
      <SearchBar />
      <MultiWeather />
    </div>
  );
};

export default CitySearch;
