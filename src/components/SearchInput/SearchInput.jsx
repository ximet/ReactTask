import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { useDebounce } from '../../hooks/useDebounce.jsx';
import { dataService } from '../../services/dataService';
import { setCurrentCity, setRecentCity } from '../../redux/actions/locationActions.js';

import styles from './SearchInput.module.scss';
import SearchIcon from '../../assets/images/search-icon.png';
import SearchLocationIcon from '../../assets/images/search-location-icon.png';

function SearchInput({ setCurrentCity, setRecentCity }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  useEffect(() => {
    if (debouncedSearchQuery) {
      searchCities(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery]);

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

  function addCity(cityInfo) {
    setCurrentCity(cityInfo);
    setRecentCity(cityInfo);
  }

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchForm}>
        <input
          id="searchInput"
          type="text"
          placeholder="Search"
          autoComplete="off"
          value={searchQuery}
          className={styles.searchInput}
          onChange={handleChange}
        />
        <label htmlFor="searchInput" className={styles.searchInputLabel}>
          <img src={SearchIcon} alt="search icon" />
        </label>
      </div>
      <div className={styles.searchResults}>
        {searchResults.map(item => (
          <li key={item.id} className={styles.searchResultItem} onClick={() => addCity(item)}>
            <img src={SearchLocationIcon} alt="location" />
            <span>{item.name}</span>
          </li>
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentCity: cityInfo => dispatch(setCurrentCity(cityInfo)),
    setRecentCity: cityInfo => dispatch(setRecentCity(cityInfo))
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);
