import React, { useState, useEffect } from 'react';
import Input from '../Form/Input/Input';
import Button from '../Buttons/Button';
import axios from 'axios';
import styles from './Searchbar.modules.css';
import getSearchedCity from '../../../api/getSearchedCity';
import SearchResults from './SearchResults';

function Searchbar() {
  const [search, setSearch] = useState('');
  const [elapsedTime, setElapsedTime] = useState(Boolean);
  const [token, setToken] = useState();
  const [searchResult, setSearchResult] = useState();

  let timer,
    timeoutVal = 1000;

  useEffect(async () => {
    if (search.length >= 3 && elapsedTime >= 1) {
      console.log('Sending query...', typeof search, search);
      let cityResult = await getSearchedCity(search);
      setSearchResult(cityResult);
    }
  }, [elapsedTime]);

  function handleKeyPress() {
    window.clearTimeout(timer);
    setElapsedTime(false);
  }

  function handleKeyUp() {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      setElapsedTime(true);
    }, timeoutVal);
  }

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
        <Button type="submit" name="Search" buttonIs="searchButton" />
      </div>
      {searchResult && <SearchResults searchResult={searchResult} />}
    </React.Fragment>
  );
}

export default Searchbar;
