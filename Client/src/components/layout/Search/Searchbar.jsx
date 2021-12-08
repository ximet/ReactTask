import React, { useState, useEffect } from 'react';
import Input from '../Form/Input/Input';
import Button from '../Buttons/Button';
import axios from 'axios';
import styles from './Searchbar.modules.css';
import getSearchedCity from '../../../api/getSearchedCity';
import SearchResults from './SearchResults';

function Searchbar() {
  const [search, setSearch] = useState('');
  const [time, setTime] = useState(false);
  const [searchResult, setSearchResult] = useState();

  let timer,
    timeoutVal = 1000;

  useEffect(async () => {
    if (search.length >= 3 && time >= 1) {
      let cityResult = await getSearchedCity(search);
      setSearchResult(cityResult);
    }
  }, [time]);

  function handleKeyPress() {
    clearTimeout(timer);
    setTime(false);
  }

  function handleKeyUp() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setTime(true);
    }, timeoutVal);
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
      {searchResult && <SearchResults searchResult={searchResult} />}
    </React.Fragment>
  );
}

export default Searchbar;
