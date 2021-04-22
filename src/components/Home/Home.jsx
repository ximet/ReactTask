import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchField from '../SearchField';
import SearchableDropdown from '../SearchableDropdown';
import CurrentWeather from '../CurrentWeather/CurrentWeatherContainer';

import useLocalStorage from '../CustomHooks/useLocalStorage';
import useLocationQueryStrings from '../CustomHooks/useLocationQueryStrings';
import useAuth from '../CustomHooks/useAuth';
import { ENTER_KEYCODE, MAX_ITEMS_LENGTH } from '../../common/constants';
import * as Styled from '../../styles/globalStyles';

const popularPlaces = [
  { name: 'New York', id: 1 },
  { name: 'Monaco', id: 2 },
  { name: 'London', id: 3 },
  { name: 'Tokyo', id: 4 }
];

const Home = ({ className }) => {
  const history = useHistory();

  const [storedValue, setValue] = useLocalStorage('searchedPlaces', []);
  const { cityId, cityName } = useLocationQueryStrings();
  const isAuthenticating = useAuth();

  const [searchWord, setSearchWord] = useState(cityName);
  const [searchError, setSearchError] = useState('');

  const handleListItemClick = ({ place }) => {
    setSearchWord(place);
    history.push(`/home/${place}`);
  };

  const handleSearch = e => {
    if (e.keyCode === ENTER_KEYCODE) {
      if (!searchWord) {
        return setSearchError('Please provide a search term');
      }

      history.push(`/home/${searchWord}`);
      setSearchError(null);

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

  return !isAuthenticating ? (
    <main className={className}>
      <Styled.Container row>
        {searchError ? <p className="home__filters__error">{searchError}</p> : null}
        <SearchField
          placeholder="Search a new place..."
          value={searchWord}
          onChange={e => setSearchWord(e.target.value)}
          onKeyDown={handleSearch}
        />
        <SearchableDropdown
          places={storedValue}
          buttonText="Recent searches ˅"
          onClick={handleListItemClick}
        />
        <SearchableDropdown
          places={popularPlaces}
          buttonText="Popular places ˅"
          onClick={handleListItemClick}
        />
      </Styled.Container>
      {cityName ? <CurrentWeather cityId={cityId} cityName={cityName} /> : null}
    </main>
  ) : (
    <p>Getting things ready for you</p>
  );
};

Home.propTypes = {
  className: PropTypes.string
};

export default Home;
