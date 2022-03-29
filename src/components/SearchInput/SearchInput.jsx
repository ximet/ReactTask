import React, { useState, useEffect, useRef } from 'react';
import classes from './SearchInput.module.css';
import { weatherApi } from '../../services/WeatherApi';
import searchIcon from '../../../public/icons/search.png';
import cancelIcon from '../../../public/icons/x.png';
import { debounce } from '../../helpers/debounceHelper';
import LocationDropdown from '../LocationDropdown/LocationDropdown';

function SearchInput({ token, theme }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [display, setDisplay] = useState(false);

  const debouncedSearchQuery = debounce(searchQuery, 500);

  useEffect(() => {
    if (searchResults.length) {
      setDisplay(true);
    }
  }, [searchResults]);

  function searchCities(city) {
    try {
      weatherApi.searchLocation(city, token).then(locations => setSearchResults(locations));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (debouncedSearchQuery) {
      searchCities(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery]);

  const handleChange = e => {
    const newValue = e.target.value;

    setSearchQuery(newValue);
  };

  const handleClear = () => {
    setSearchResults([]);
    setSearchQuery('');
    setDisplay(false);
  };

  const handleLocationSelect = () => {
    handleClear();
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className={classes.search_wrapper} data-theme={theme}>
      <form action="" onSubmit={handleSubmit}>
        <button type="button">
          <img src={searchIcon} alt="search icon" className={classes.search_icon} />
        </button>

        <input
          className={classes.search_input}
          placeholder="Search location"
          value={searchQuery}
          onChange={handleChange}
        />

        <button type="button" onClick={handleClear}>
          <img src={cancelIcon} alt="cancel icon" className={classes.cancel_icon} />
        </button>
      </form>

      <LocationDropdown
        display={display}
        searchResults={searchResults}
        onLocationSelect={handleLocationSelect}
      />
    </div>
  );
}

export default SearchInput;
