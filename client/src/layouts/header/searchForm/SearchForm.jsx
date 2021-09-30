import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar/SearchBar';
import Cities from './cities/Cities';
import classes from './searchForm.module.css';
import { cities } from '../../../../arrayOfCities';

function SearchForm() {
  const [searchText, setSearchText] = useState('');
  const [matchingCities, setMatchingCities] = useState([]);

  const handleSearchText = e => {
    setSearchText(e.target.value);
  };

  const findMatchingCities = () => {
    const tempMatchingCities =
      searchText !== ''
        ? cities.filter(city => city.name.toLowerCase().startsWith(searchText.toLowerCase()))
        : [];

    setMatchingCities(tempMatchingCities);
  };

  useEffect(() => {
    findMatchingCities();
  }, [searchText]);

  return (
    <div className={classes.container}>
      <SearchBar searchText={searchText} handleSearchText={handleSearchText} />
      {matchingCities.length > 0 && <Cities cities={matchingCities} />}
    </div>
  );
}

export default SearchForm;
