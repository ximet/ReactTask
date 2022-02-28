import React, { useState, useEffect } from 'react';
import classes from './SearchInput.module.css';
import weatherApi from '../../services/WeatherApi';
import searchIcon from '../../../public/icons/search.png';
import cancelIcon from '../../../public/icons/x.png';
import { debounce } from '../../helpers/debounceHelper';

const sortSearchResults = searchResults => {
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
  const formattedTile = `${city.name}, ${city.country}`;
  if (city.state) {
    return formattedTile.concat(`, ${city.state}`);
  }
  return formattedTile;
};

function SearchInput({ token }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearchQuery = debounce(searchQuery, 1000);

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

  return (
    <div className={classes.search_wrapper}>
      <div className={classes.search_form}>
        <button type="button" className={classes.search_button}>
          <img src={searchIcon} alt="search icon" className={classes.search_icon} />
        </button>
        <label htmlFor="searchInput" className={classes.search_label}>
          <input
            id="searchInput"
            type="text"
            placeholder="Search"
            autoComplete="off"
            value={searchQuery}
            className={classes.search_input}
            onChange={handleChange}
          />
        </label>
        <button type="button" className={classes.star_button} onClick={handleClear}>
          <img src={cancelIcon} alt="cancel icon" className={classes.cancel_icon} />
        </button>
      </div>
      <div className={classes.search_dropdown}>
        {sortSearchResults(searchResults).map(item => (
          <div key={item.id} className={classes.search_dropdown_item}>
            <div>{formatCityTile(item)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchInput;
