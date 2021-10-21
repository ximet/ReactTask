import React, { useEffect, useRef } from 'react';
import SearchBar from './searchBar/SearchBar';
import Cities from './Cities/Container';
import classes from './SearchForm.module.css';
import { useCitiesSearch } from '../../../hooks/hooks';

function SearchForm() {
  const [
    searchText,
    setSearchText,
    matchingCities,
    shouldShowCitiesWindow,
    setShouldShowCitiesWindow
  ] = useCitiesSearch('');
  const citiesRef = useRef(null);

  const handleSearchText = e => {
    setSearchText(e.target.value);
  };

  const handleClickOutsideCities = e => {
    if (!citiesRef.current.contains(e.target)) {
      setShouldShowCitiesWindow(false);
      setSearchText('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideCities);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideCities);
    };
  }, []);

  return (
    <div className={classes.container}>
      <SearchBar searchText={searchText} handleSearchText={handleSearchText} />
      <div ref={citiesRef}>{shouldShowCitiesWindow && <Cities cities={matchingCities} />}</div>
    </div>
  );
}

export default SearchForm;
