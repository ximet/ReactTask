import { locationSearch } from '../api/weatherApi';
import { useState, useEffect } from 'react';
import { searchCitiesTimout } from '../globalConsts';
import { startLengthToSearchCities } from '../globalConsts';

export const useCitiesSearch = initialState => {
  const [searchText, setSearchText] = useState(initialState);
  const [matchingCities, setMatchingCities] = useState([]);
  const [shouldShowCitiesWindow, setShouldShowCitiesWindow] = useState(false);

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
      const didCitiesMatch = tempMatchingCities.locations.length > 0;

      setMatchingCities(tempMatchingCities.locations);
      setShouldShowCitiesWindow(didCitiesMatch);
    } else {
      setMatchingCities([]);
      setShouldShowCitiesWindow(false);
    }
  };

  return [
    searchText,
    setSearchText,
    matchingCities,
    shouldShowCitiesWindow,
    setShouldShowCitiesWindow
  ];
};
