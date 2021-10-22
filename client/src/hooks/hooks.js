import { locationSearch } from '../api/weatherApi';
import { useState, useEffect } from 'react';
import { searchCitiesTimout } from '../globalConsts';
import { startLengthToSearchCities } from '../globalConsts';

export const useCitiesSearch = initialState => {
  const [searchText, setSearchText] = useState(initialState);
  const [matchingCities, setMatchingCities] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      findMatchingCities();
    }, searchCitiesTimout);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchText]);

  const findMatchingCities = async () => {
    if (searchText.length > startLengthToSearchCities) {
      const tempMatchingCities = await locationSearch(searchText);

      setMatchingCities(tempMatchingCities.locations);
    } else {
      setMatchingCities([]);
    }
  };

  return [
    searchText,
    setSearchText,
    matchingCities,
    setMatchingCities
  ];
};
