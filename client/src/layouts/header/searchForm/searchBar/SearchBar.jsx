import React from 'react';
import classes from './searchBar.module.css'
import searchIcon from '../../../../../public/images/searchIcon.png'

function SearchBar({ theme }) {
  return (
    <div className={classes.container} data-theme={theme}>
      <input type="text" placeholder="Enter city"/>
      <img src={searchIcon} alt="searc"/>
    </div>
  )
}

export default SearchBar;
