import React from 'react';
import classes from './SearchBar.module.css';
import searchIcon from '../../../../../public/images/searchIcon.png';
import PropTypes from 'prop-types'

function SearchBar({ searchText, handleSearchText }) {
  return (
    <form className={classes.container}>
      <input type="text" value={searchText} onChange={handleSearchText} placeholder="Enter city" />
      <img src={searchIcon} alt="searc" />
    </form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleSearchText: PropTypes.func.isRequired
}

export default SearchBar;
