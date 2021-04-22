import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';
import { ENTER_KEYCODE, MAX_ITEMS_LENGTH } from '../common/constants';

const useCitySearch = cityName => {
  const history = useHistory();
  const [storedValue, setValue] = useLocalStorage('searchedPlaces', []);
  const [searchWord, setSearchWord] = useState(cityName);
  const [searchError, setSearchError] = useState(null);

  const search = searchQuery => {
    setSearchWord(searchQuery);
    history.push(`/home/${searchQuery}`);
  };

  const startExistingSearch = ({ place }) => search(place);

  const startNewSearch = e => {
    if (e.keyCode === ENTER_KEYCODE) {
      if (!searchWord) {
        return setSearchError('Please provide a search term');
      }

      search(searchWord);

      // if the city is already in LocalStorage, don't add it again
      if (storedValue.find(({ name }) => name === searchWord)) {
        return '';
      }

      // keep only 5 cities at a time
      const lastFiveSearchedCities = storedValue.slice(0, MAX_ITEMS_LENGTH);
      // take the id of the last added city and use it +1 as id
      // if there are no searched cities, just use 1
      const newCityId = lastFiveSearchedCities[0] ? lastFiveSearchedCities[0].id + 1 : 1;

      const newCity = {
        name: searchWord,
        id: newCityId
      };
      // set the new items to LocalStorage
      setValue([newCity, ...lastFiveSearchedCities]);
    }

    return '';
  };

  return {
    onQueryChange: setSearchWord,
    query: searchWord,
    error: searchError,
    startNewSearch,
    startExistingSearch,
    savedCities: storedValue
  };
};

export default useCitySearch;
