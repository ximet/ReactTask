import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import classes from './SearchedLocations.module.scss';
import ApiService from '../../../../../../services/ForecastApiService';
import SearchedLocation from '../SearchedLocation/SearchedLocation';

function SearchedLocations({ searchString }) {
  const [cookies] = useCookies(['token']);
  const [locations, setLocations] = useState([]);

  useEffect(async () => {
    const searchedLocations = await getSearchLocations(searchString, cookies);
    setLocations(searchedLocations.locations);
  }, [searchString]);

  async function getSearchLocations(locationQueryStr, cookies) {
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
  }

  return (
    <ul className={classes.searchedLocationsContainer}>
      {locations.map(item => (
        <SearchedLocation location={item} />
      ))}
    </ul>
  );
}

export default SearchedLocations;
