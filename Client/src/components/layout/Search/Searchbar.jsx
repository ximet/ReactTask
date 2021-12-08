import React, { useState, useEffect } from 'react';
import Input from '../Form/Input/Input';
import Button from '../Buttons/Button';
import axios from 'axios';
import styles from './Searchbar.modules.css';
import getSearchedCity from '../../../api/getSearchedCity';
import SearchResults from './SearchResults';
import { MINIMUM_SEARCH_LENGTH, TIMEOUT_VALUE } from '../../../constants';

function Searchbar() {
  const [search, setSearch] = useState('');
  const [shouldInitiateSearch, setShouldInitiateSearch] = useState(false);
  const [searchResult, setSearchResult] = useState({});

  useEffect(async () => {
    if (search.length >= MINIMUM_SEARCH_LENGTH && shouldInitiateSearch) {
      let cityResult = await getSearchedCity(search);
      setSearchResult(cityResult);
    }
  }, [shouldInitiateSearch]);

  function handleKeyPress() {
    clearTimeout();
    setShouldInitiateSearch(false);
  }

  function handleKeyUp() {
    clearTimeout();
    setTimeout(() => {
      setShouldInitiateSearch(true);
    }, TIMEOUT_VALUE);
  }

  const handleSearchSubmit = async () => {
    let cityResult = await getSearchedCity(search);
    setSearchResult(cityResult);
  };

  return (
    <React.Fragment>
      <div className={styles.searchbar}>
        <Input
          type="text"
          placeholder="What city are we looking for today?"
          name="search"
          onChange={event => setSearch(event.target.value)}
          value={search}
          onKeyPress={event => handleKeyPress(event)}
          onKeyUp={event => handleKeyUp(event)}
        />
        <Button
          type="button"
          name="Search"
          buttonType="searchButton"
          onClick={() => handleSearchSubmit()}
        />
      </div>
      {searchResult.length && <SearchResults searchResult={searchResult} />}
    </React.Fragment>
  );
}

export default Searchbar;
