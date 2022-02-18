import React, { useEffect, useState } from 'react';
import weatherApi from '../../api/weatherApi';

import searchIcon from '../../assets/images/search.png';
import SearchAutocompleteItem from '../SearchAutocompleteItem/SearchAutocompleteItem';

import './Search.scss';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [isOpenAutocomplete, setIsOpenAutocomplete] = useState(false);
  const [cities, setCities] = useState(null);

  useEffect(() => {
    const delayBeforeSearching = setTimeout(() => {
      if (inputValue) {
        weatherApi.getLocationSearch(inputValue).then(setCities);
      }
    }, 500);

    return () => clearTimeout(delayBeforeSearching);
  }, [inputValue]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpenAutocomplete(false);
  };

  const handleChange = ({ target }) => setInputValue(target.value);

  const handleFocus = () => setIsOpenAutocomplete(true);
  const handleBlur = () => setTimeout(() => { setIsOpenAutocomplete(false); }, 100);

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search-input"
        placeholder="City search"
        value={inputValue}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button className="search-button" type="submit">
        <img className="search-submit" src={searchIcon} alt="search" />
      </button>
      {isOpenAutocomplete && cities
        ? (
          <ul className="search__autocomplete">
            {cities.length
              ? cities.map((city) => (
                <SearchAutocompleteItem
                  cityData={city}
                  key={city.id}
                  setInputValue={setInputValue}
                />
              ))
              : <div className="search__loading">No matches</div>}
          </ul>
        )
        : null}
    </form>
  );
}

export default Search;
