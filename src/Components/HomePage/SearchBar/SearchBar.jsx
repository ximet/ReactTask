import { useEffect, useState } from 'react';
import { instance } from '../../../DataService/apiService';
import { endpoints } from '../../../Helpers/constants';

import styles from './SearchBar.module.scss';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ coordsStateHandler, ...rest }) {
  const [inputValue, setInputValue] = useState('');
  const [searchData, setSearchData] = useState([]);

  const getLocationDataByName = async () => {
    try {
      const { data } = await instance(endpoints.LOCATION_NAME(inputValue));
      setSearchData(data.locations);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getLocationCoords = async () => {
    try {
      const { data } = await instance(
        endpoints.LOCATION_NAME(inputValue.substring(0, inputValue.indexOf(',')))
      );
      return { long: data.locations[0]?.lon, lat: data.locations[0]?.lat };
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (inputValue.length > 2) {
      getLocationDataByName();
      getLocationCoords();
    }
  }, [inputValue]);

  const inputValueHandler = (value) => {
    setInputValue(value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    coordsStateHandler(await getLocationCoords());
    setInputValue('');
  };

  return (
    <div className={styles.container}>
      <form className={styles.search} onSubmit={onSubmitHandler}>
        <input
          list="locations"
          type="text"
          value={inputValue}
          onChange={(event) => inputValueHandler(event.target.value)}
          className={styles['search-bar']}
          placeholder="Search"
        />
        <button type="submit" className={styles['search-icon']}>
          <FiSearch />
        </button>
        <datalist id="locations">
          {searchData.map((item) => (
            <option key={item.id} value={`${item.name}, ${item.country}`} />
          ))}
        </datalist>
      </form>
    </div>
  );
}

export default SearchBar;
