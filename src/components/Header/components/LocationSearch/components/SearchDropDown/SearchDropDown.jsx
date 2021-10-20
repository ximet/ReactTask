// @flow
import SearchBar from '../SearchBar/SearchBar';
import SearchedLocations from '../SearchedLocations/SearchedLocations';
import classes from './SearchDropDown.module.scss';
import React, { useState, useEffect } from 'react';
import ApiService from '../../../../../../services/ForecastApiService';
import type {
  LocationType,
  SearchedLocationsType,
  LocationsResponseType
} from '../../../../../../types/LocationType';
import type { SearchDropDownPropsType } from './SearchDropDownPropsType';
import { COOKIE_TOKEN_FIELD } from '../../../../../../utils/constants';

function SearchDropDown({ isOpenDropDown, ...props }: SearchDropDownPropsType): React$Node {
  const [searchString, setSearchString] = useState('');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const setLocationsValue = async (): Promise<void> => {
      const { data } = await ApiService.getLocationsSearch(searchString);
      setLocations(data.locations);
    };

    setLocationsValue();
  }, [searchString]);

  const handleSetSearchString = async string => setSearchString(string);

  return (
    <div className={classes.searchBarContainer}>
      <SearchBar onChangeSearchString={handleSetSearchString} />
      <SearchedLocations locations={locations} />
    </div>
  );
}

export default SearchDropDown;
