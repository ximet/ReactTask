import { useState, useEffect } from 'react';
import RequestController from '../controllers/RequestsController';

export function useLocationSearch(searchString) {
  const [locations, setLocations] = useState([]);

  useEffect(async () => {
    const locations = RequestController.getLocationsSearch(searchString);
    setLocations(locations);
  }, [searchString]);

  return [locations, setLocations];
}
