import React from 'react';
import commonClasses from '../common.scss';

const ListPage = () => {
  const isSearchedLocationEmpty = Object.keys(searchedLocation).length === 0;

  const [searchedLocation, setSearchedLocation] = useState({});

  const updateSearchedLocation = location => {
    setSearchedLocation(location);
  };

  return (
    <main className={commonClasses.page}>
      <SearchLocation token={token} updateSearchedLocation={updateSearchedLocation} />
      {isSearchedLocationEmpty ? (
        ''
      ) : (
        <CurrentWeather
          title={'Current weather from searched location'}
          token={token}
          locationId={searchedLocation.id}
        />
      )}
    </main>
  );
};

export default ListPage;
