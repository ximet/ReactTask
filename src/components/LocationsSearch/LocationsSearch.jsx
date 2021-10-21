import PropTypes from 'prop-types';
import { useState } from 'react';
import { CurrentLocationInfoType } from '../../types/types';
import Preloader from '../Preloader/Preloader';
import './LocationsSearch.css';
import LocationsSearchReuslts from './LocationsSearchReuslts/LocationsSearchReuslts';
import debounce from 'lodash/debounce';
import { DEBOUNCE_WAIT_TIME, MIN_CHARACKTERS_FOR_SEARCH } from '../../constants/constants';

function LocationsSearch({ isReadyForSearch, searchResults, clearSearch, searchLocations }) {
  const [inputValue, setInputValue] = useState('');
  const debouncedSearchLocations = debounce(searchLocations, DEBOUNCE_WAIT_TIME);

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);

    if (value === '') {
      clearSearch();
    }

    if (value.length >= MIN_CHARACKTERS_FOR_SEARCH) {
      debouncedSearchLocations(value);
    }
  }

  return (
    <div className="locations-search">
      <h2 className="locations-search__title">Search for location</h2>
      <input
        type="text"
        className="locations-search__input"
        placeholder="search query"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="locations-search__input-description">
        at least {MIN_CHARACKTERS_FOR_SEARCH} characters
      </div>
      {isReadyForSearch ? <LocationsSearchReuslts searchResults={searchResults} /> : <Preloader />}
    </div>
  );
}

LocationsSearch.propTypes = {
  isReadyForSearch: PropTypes.bool.isRequired,
  searchResults: PropTypes.arrayOf(CurrentLocationInfoType).isRequired,
  clearSearch: PropTypes.func.isRequired,
  searchLocations: PropTypes.func.isRequired
};

export default LocationsSearch;
