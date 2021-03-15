import React, { useState } from 'react';

import SearchField from './SearchField';
import SearchableDropdown from './SearchableDropdown';
import CurrentWeather from './CurrentWeather';

import useLocalStorage from './CustomHooks/useLocalStorage';

const Home = () => {
  const [searchWord, setSearchWord] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');
  const [searchError, setSearchError] = useState('');
  const [storedValue, setValue] = useLocalStorage('searchedPlaces', []);

  const popularPlaces = ['New York', 'Monaco', 'London', 'Tokyo'];

  const handleListItemClick = (e) => {
    const searchTerm = e.target.innerText;
    setCurrentSearch(searchTerm);
  };

  const handleSearchWordChange = (e) => {
    if (e.keyCode === 13) {
      if (!searchWord) {
        return setSearchError('Please provide a search term');
      }

      setCurrentSearch(searchWord);
      setSearchError('');

      if (storedValue.includes(searchWord)) {
        return '';
      }

      const currentSearchedPlaces = storedValue.slice(0, 4);
      setValue([searchWord, ...currentSearchedPlaces]);
    }

    return '';
  };

  return (
    <main className="app__main home">
      <section className="home__filters">
        {searchError
          ? <p className="home__filters__error">{searchError}</p>
          : null}
        <SearchField
            placeholder="Search a new place..."
            value={searchWord}
            handleChange={(e) => setSearchWord(e.target.value)}
            handleKeydown={handleSearchWordChange} />
        <SearchableDropdown
            places={storedValue}
            buttonText="Recent searches ˅"
            handleListItemClick={handleListItemClick} />
        <SearchableDropdown
            places={popularPlaces}
            buttonText="Popular places ˅"
            handleListItemClick={handleListItemClick} />
      </section>
      {currentSearch
        ? <CurrentWeather currentSearch={currentSearch} />
        : null}
    </main>
  );
};

export default Home;
