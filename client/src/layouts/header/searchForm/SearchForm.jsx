import React from 'react';
import SearchBar from './searchBar/SearchBar';
import Cities from './Cities/Cities';
import classes from './SearchForm.module.css';
import { useCitiesSearch } from '../../../hooks/hooks';

function SearchForm() {
  const [searchText, setSearchText, matchingCities] = useCitiesSearch('');

  const handleSearchText = e => {
    setSearchText(e.target.value);
  };

  return (
    <div className={classes.container}>
      <SearchBar searchText={searchText} handleSearchText={handleSearchText} />
      {matchingCities.length > 0 && <Cities cities={matchingCities} />}
    </div>
  );
}

export default SearchForm;
