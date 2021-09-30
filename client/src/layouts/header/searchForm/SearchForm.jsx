import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar/SearchBar';
import Cities from './cities/Cities';
import classes from './searchForm.module.css';
import { cities } from '../../../../arrayOfCities';

function SearchForm() {
  const [searchText, setSearchText] = useState('');
  const [matchingCities, setMatchingCities] = useState([]);
  const [needToShowMatchingCities, setNeedToShowMatchingCities] = useState(false);

  console.log(matchingCities);

  const handleSearchText = e => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };

  const findmatchingCities = () => {
    setMatchingCities(
      cities.filter(city => {
        return city.name.toLowerCase().startsWith(searchText.toLowerCase());
      })
    );
    matchingCities.length ? setNeedToShowMatchingCities(true) : setNeedToShowMatchingCities(false);
  };

  useEffect(() => {
    findmatchingCities();
  }, [searchText]);

  return (
    <div className={classes.container}>
      <SearchBar searchText={searchText} handleSearchText={handleSearchText} />
      {needToShowMatchingCities && <Cities cities={matchingCities} />}
    </div>
  );
}

export default SearchForm;
