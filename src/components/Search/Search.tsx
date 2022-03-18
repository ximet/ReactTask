import React, { useEffect, useState, useRef } from 'react';

import weatherApi from '../../api/weatherApi';
import searchIcon from '../../assets/images/search.png';
import { LocationSearchItemInterface } from '../../interfaces/interfaces';
import SearchAutocompleteItem from '../SearchAutocompleteItem/SearchAutocompleteItem';

import './Search.scss';

function Search() {
  const [inputValue, setInputValue] = useState<string>('');
  const [isOpenAutocomplete, setIsOpenAutocomplete] = useState<boolean>(false);
  const [cities, setCities] = useState<LocationSearchItemInterface[] | null>(null);
  const input = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const delayBeforeSearching = setTimeout((): void => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => setInputValue(e.target.value);

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
