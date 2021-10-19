import { locationSearch } from '../api/weatherApi';
import { useState, useEffect } from 'react';
import { timeoutToSearchCities } from '../globalConsts';

export const useCitiesSearch = initialState => {
  const [searchText, setSearchText] = useState(initialState);
  const [matchingCities, setMatchingCities] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      findMatchingCities();
    }, timeoutToSearchCities);

    return () => {
      clearInterval(timer);
    };
  }, [searchText]);

  const findMatchingCities = async () => {
    if (searchText) {
      const tempMatchingCities = await locationSearch(searchText);
      setMatchingCities(tempMatchingCities.locations);
      console.log(tempMatchingCities.locations);
    }
  };

  return [searchText, setSearchText, matchingCities];
};
