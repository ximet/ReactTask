import { useState, useEffect } from 'react';
import ApiService from '../services/ForecastApiService';

export function useLocationSearch(searchString) {
  const [locations, setLocations] = useState([]);

  useEffect(async () => {
    let responseData = {};
    try {
      const { data } = await ApiService.getLocationsSearch(searchString);
      responseData = data.locations;
    } catch (error) {
      console.error(error);
    }

    setLocations(responseData);
  }, [searchString]);

  return locations;
}
