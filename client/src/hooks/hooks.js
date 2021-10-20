import { locationSearch } from '../api/weatherApi';
import { useState, useEffect } from 'react';
import { timeoutToSearchCities } from '../globalConsts';

export const useCitiesSearch = initialState => {
  const [searchText, setSearchText] = useState(initialState);
  const [matchingCities, setMatchingCities] = useState([]);
  const [needToShowCitiesWindow, setNeedToShowCitiesWindow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      findMatchingCities();
    }, timeoutToSearchCities);

    return () => {
      clearInterval(timer);
    };
  }, [searchText]);

  const findMatchingCities = async () => {
    if (searchText.length > 2) {
      const tempMatchingCities = await locationSearch(searchText);
      setMatchingCities(tempMatchingCities.locations);
      tempMatchingCities.locations.length > 0 ? setNeedToShowCitiesWindow(true) : setNeedToShowCitiesWindow(false)
    } else {
      setMatchingCities([]);
      setNeedToShowCitiesWindow(false)
    }
  };

  return [searchText, setSearchText, matchingCities, needToShowCitiesWindow, setNeedToShowCitiesWindow];
};
