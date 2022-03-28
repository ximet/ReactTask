import React, { useState, useEffect } from 'react';
import classes from './SearchInput.module.css';
import { weatherApi } from '../../services/WeatherApi';
import searchIcon from '../../../public/icons/search.png';
import cancelIcon from '../../../public/icons/x.png';
import { debounce } from '../../helpers/debounceHelper';

const sortSearchResults = (searchResults, searchQuery) => {
  if (searchQuery.length > 3 && searchResults.length === 0) {
    return [
      {
        name: 'Location not found'
      }
    ];
  }
  const sortByCountry = searchResults.sort(function (firstCountry, secondCountry) {
    return firstCountry.country.localeCompare(secondCountry.country);
  });
  const sortByCity = sortByCountry.sort(function (firstCity, secondCity) {
    return firstCity.name.localeCompare(secondCity.name);
  });
  const sortedDataFirstTen = sortByCity.slice(0, 10);

  return sortedDataFirstTen;
};

const formatCityTile = city => {
  if (city.country === undefined) {
    return `${city.name}`;
  }
  const formattedTile = `${city.name}, ${city.country}`;
  if (city.state) {
    return formattedTile.concat(`, ${city.state}`);
  }
  return formattedTile;
};

function SearchInput({ token, theme }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearchQuery = debounce(searchQuery, 50);

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
  };

  const handleSubmit = event => {
    event.preventDefault();
    // inputRef.current.focus();
    // updateOptions();
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
          // onBlur={handleBlur}
          // onFocus={handleFocus}
          // ref={inputRef}
        />

        <button type="button" onClick={handleClear}>
          <img src={cancelIcon} alt="cancel icon" className={classes.cancel_icon} />
        </button>
      </form>
      <div className={classes.search_dropdown}>
        {sortSearchResults(searchResults, searchQuery).map(item => (
          <div key={item.id} className={classes.search_dropdown_item}>
            <div>{formatCityTile(item)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchInput;
