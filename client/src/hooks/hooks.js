import { locationSearch } from '../api/weatherApi';
import { useState, useEffect } from 'react';
import { searchCitiesTimout } from '../globalConsts';
import { startLengthToSearchCities } from '../globalConsts';
import { getCurrentTimeByTimeZone } from '../services/dateService';
import { formatDate } from '../services/dateService';
import { getCurrentTimeInterval } from '../globalConsts';

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

  return [searchText, setSearchText, matchingCities, setMatchingCities];
};

export const useLocalStorageTheme = initialTheme => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || initialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
};