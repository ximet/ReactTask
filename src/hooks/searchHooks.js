import { useState, useEffect } from 'react';
import ApiService from '../services/ForecastApiService';

export function useLocationSearch(searchString, changeVisibleSearchPreloader) {
  const [locations, setLocations] = useState([]);

  useEffect(async () => {
    changeVisibleSearchPreloader(true);

    let responseData = {};
    try {
      const { data } = await ApiService.getLocationsSearch(searchString);
      responseData = data.locations;
    } catch (error) {
      console.error(error);
    }

    changeVisibleSearchPreloader(false);
    setLocations(responseData);
  }, [searchString]);

  return locations;
}
