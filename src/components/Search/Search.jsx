import React, { useEffect, useState, useRef } from 'react';

import weatherApi from '../../api/weatherApi';
import searchIcon from '../../assets/images/search.png';
import SearchAutocompleteItem from '../SearchAutocompleteItem/SearchAutocompleteItem';

import './Search.scss';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [isOpenAutocomplete, setIsOpenAutocomplete] = useState(false);
  const [cities, setCities] = useState(null);
  const input = useRef(null);

  useEffect(() => {
    const delayBeforeSearching = setTimeout(() => {
      if (inputValue) {
        weatherApi.getLocationSearch(inputValue).then(setCities);
      }
    }, 500);

    if (inputValue) {
      setIsOpenAutocomplete(true);
    } else {
      setIsOpenAutocomplete(false);
    }

    return () => clearTimeout(delayBeforeSearching);
  }, [inputValue]);

  const handleClick = () => input.current.focus();

  const handleChange = ({ target }) => setInputValue(target.value);

  const handleBlur = () => !inputValue && setIsOpenAutocomplete(false);

  return (
    <form className="search">
      <input
        className="search-input"
        placeholder="City search"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        ref={input}
      />
      <button className="search-button" type="button" onClick={handleClick}>
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
                  setIsOpenAutocomplete={setIsOpenAutocomplete}
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
