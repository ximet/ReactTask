import React, { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';

import styles from './SearchInput.module.scss';
import SearchIcon from '../../assets/images/search-icon.png';
import SearchLocationIcon from '../../assets/images/search-location-icon.png';
import { NUMBER_OF_RESULTS } from '../../constants/forecaApi';
import { dataService } from '../../services/dataService';

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      searchCities(searchQuery);
    }
  }, [searchQuery]);

  async function searchCities(query) {
    try {
      const { locations } = await dataService.searchCity(query);

      setSearchResults(locations);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const renderSearchResults = searchResults.map(item => (
    <li key={item.id} className={styles.searchResultItem}>
      <img src={SearchLocationIcon} alt="location" />
      <span>{item.name}</span>
    </li>
  ));

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchForm}>
        <DebounceInput
          id="searchInput"
          type="text"
          placeholder="Search"
          autoComplete="off"
          debounceTimeout={500}
          value={searchQuery}
          className={styles.searchInput}
          onChange={handleChange}
        />
        <label htmlFor="searchInput" className={styles.searchInputLabel}>
          <img src={SearchIcon} alt="search icon" />
        </label>
      </div>
      <div className={styles.searchResults}>{renderSearchResults}</div>
    </div>
  );
}

export default SearchInput;
