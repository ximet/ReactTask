import React from 'react';

import styles from './SearchInput.module.scss';
import SearchIcon from '../../assets/images/search-icon.png';

function SearchInput() {
  return (
    <>
      <div className={styles.searchWrapper}>
        <input id="searchInput" type="text" placeholder="Search" className={styles.searchInput} />
        <label htmlFor="searchInput" className={styles.searchInputLabel}>
          <img src={SearchIcon} alt="search icon" />
        </label>
      </div>
      <div className={styles.searchResults} />
    </>
  );
}

export default SearchInput;
