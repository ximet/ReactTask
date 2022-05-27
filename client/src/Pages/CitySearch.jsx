import React from 'react';
import MultiWeather from '../Components/MultiCard/MultiCard';
import SearchBar from '../Components/SearchBar/SearchBar';

const CitySearch = () => {
  return (
    <div>
      <SearchBar />
      <MultiWeather />
    </div>
  );
};

export default CitySearch;
