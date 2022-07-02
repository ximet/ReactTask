import { useEffect, useState } from 'react';
import { instance } from '../../../DataService/dataService';
import { endpoints } from '../../../Helpers/constants';

import styles from './SearchBar.module.scss';
import { FiSearch } from 'react-icons/fi';

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [searchData, setSearchData] = useState([]);

  const getLocationName = async () => {
    try {
      const { data } = await instance(endpoints.LOCATION_NAME(inputValue));
      setSearchData(data.locations);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(async () => {
    if (inputValue.length > 2) {
      getLocationName();
    }
  }, [inputValue]);

  const inputValueHandler = (value) => {
    setInputValue(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('CHANGE WEATHER!');
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
