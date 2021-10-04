import SearchBar from '../SearchBar/SearchBar';
import SearchedLocations from '../SearchedLocations/SearchedLocations';
import classes from './SearchDropDown.module.scss';
import { useState } from 'react';

function SearchDropDown({ isOpenDropDown, ...props }) {
  const [searchString, setSearchString] = useState('');

  const handleSetSearchString = async string => setSearchString(string);
  const onChangeLocation = location => props.onChangeLocation(location);

  return (
    <div className={classes.searchBarContainer}>
      <SearchBar onChangeSearchString={handleSetSearchString} />
      <SearchedLocations onChangeLocation={onChangeLocation} searchString={searchString} />
    </div>
  );
}

export default SearchDropDown;
