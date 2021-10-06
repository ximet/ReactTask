import SearchBar from '../SearchBar/SearchBar';
import SearchedLocations from '../SearchedLocations/SearchedLocations';
import classes from './SearchDropDown.module.scss';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import ApiService from '../../../../../../services/ForecastApiService';

function SearchDropDown({ isOpenDropDown, ...props }) {
  const [searchString, setSearchString] = useState('');
  const [locations, setLocations] = useState([]);
  const [cookies] = useCookies(['token']);

  useEffect(async () => {
    const searchedResult = await getSearchLocations(searchString, cookies);
    setLocations(searchedResult.locations);
  }, [searchString]);

  const getSearchLocations = async (locationQueryStr, cookies) => {
    let responseData = {
      status: false
    };

    try {
      const accessToken = await ApiService.getAccessToken(cookies);
      const url = `/api/v1/location/search/${locationQueryStr}`;

      responseData = await ApiService.getLocationsSearch(url, accessToken);
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }

    return responseData;
  };

  const handleSetSearchString = async string => setSearchString(string);
  const onChangeLocation = location => props.onChangeLocation(location);

  return (
    <div className={classes.searchBarContainer}>
      <SearchBar onChangeSearchString={handleSetSearchString} />
      <SearchedLocations onChangeLocation={onChangeLocation} locations={locations} />
    </div>
  );
}

export default SearchDropDown;
