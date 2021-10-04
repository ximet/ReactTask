import classes from './SearchedLocations.module.scss';
import SearchedLocation from '../SearchedLocation/SearchedLocation';
import ApiService from '../../../../../../services/ForecastApiService';

import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

function SearchedLocations({ setChangeLocation, searchString, ...props }) {
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

  const setLocation = location => setChangeLocation(location);
  const onChangeLocation = location => props.onChangeLocation(location);

  return (
    <ul className={classes.searchedLocationsContainer}>
      {locations.map(item => (
        <SearchedLocation
          key={item.id}
          setLocation={setLocation}
          onChangeLocation={onChangeLocation}
          location={item}
        />
      ))}
    </ul>
  );
}

export default SearchedLocations;
