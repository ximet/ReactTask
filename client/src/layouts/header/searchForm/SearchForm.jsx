import React from 'react';
import SearchBar from './searchBar/SearchBar';
import Cities from './cities/Cities';
import classes from './searchForm.module.css';

function SearchForm() {
  return (
    <div className={classes.container}>
      <SearchBar />
      <Cities />
    </div>
  );
}

export default SearchForm;
