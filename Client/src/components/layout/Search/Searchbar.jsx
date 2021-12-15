import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Input from '../Form/Input/Input';
import Button from '../Buttons/Button';
import styles from './Searchbar.modules.css';
import SearchResults from './SearchResults';
import { getSearchedCityData } from '../../../redux/actions/actions';
import { MINIMUM_SEARCH_LENGTH, TIMEOUT_VALUE } from '../../../constants';

function Searchbar(props) {
  const [search, setSearch] = useState('');
  const [shouldInitiateSearch, setShouldInitiateSearch] = useState(false);
  const [searchResult, setSearchResult] = useState({});

  useEffect(async () => {
    if (search.length >= MINIMUM_SEARCH_LENGTH && shouldInitiateSearch) {
      props.getSearchedCityData(search);
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
      {props.cityData.data && <SearchResults searchResult={props.cityData.data} />}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    cityData: state.getSearchedCityData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchedCityData: city => dispatch(getSearchedCityData(city))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
