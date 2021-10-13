// @flow
import SearchBar from '../SearchBar/SearchBar';
import SearchedLocations from '../SearchedLocations/SearchedLocations';
import classes from './SearchDropDown.module.scss';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import ApiService from '../../../../../../services/ForecastApiService';
import type {
  LocationType,
  SearchedLocationsType,
  LocationsResponseType
} from '../../../../../../types/LocationType';
import type { SearchDropDownPropsType } from './SearchDropDownPropsType';

function SearchDropDown({ isOpenDropDown, ...props }: SearchDropDownPropsType): React$Node {
  const [searchString, setSearchString] = useState('');
  const [locations, setLocations] = useState([]);
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    const setLocationsValue = async (): Promise<void> => {
      const searchedResult: SearchedLocationsType = await getSearchLocations(searchString, cookies);
      setLocations(searchedResult.locations);
    };

    setLocationsValue();
  }, [searchString]);

  const getSearchLocations = async (locationQueryStr, cookies): Promise<LocationsResponseType> => {
    let responseData = {
      status: false,
      locations: []
    };

    try {
      const accessToken = await ApiService.getAccessToken(cookies);
      const url = `/api/v1/location/search/${locationQueryStr}`;

      responseData = await ApiService.getLocationsSearch(url, accessToken);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  };

  const handleSetSearchString = async string => setSearchString(string);

  return (
    <div className={classes.searchBarContainer}>
      <SearchBar onChangeSearchString={handleSetSearchString} />
      <SearchedLocations locations={locations} />
    </div>
  );
}

export default SearchDropDown;
