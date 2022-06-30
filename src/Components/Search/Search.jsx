import { useEffect, useState } from 'react';
import { instance } from '../../DataService/dataService';
import { endpoints } from '../../Helpers/constants';

import styles from './Search.module.scss';
import { FiSearch } from 'react-icons/fi';

const Search = ({ cities }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchData, setSearchData] = useState([]);

  const getLocationName = async () => {
    try {
      const { data } = await instance(endpoints.LOCATION_NAME(inputValue));
      console.log(data.locations);
      setSearchData(data.locations);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(async () => {
    if (inputValue.length >= 3) {
      getLocationName();
    }
  }, [inputValue]);

  const inputValueHandler = (value) => {
    setInputValue(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          list="locations"
          type="text"
          value={inputValue}
          onChange={(event) => inputValueHandler(event.target.value)}
          className={styles['search-term']}
          placeholder="Search"
        />
        <div type="button" className={styles['search-icon']}>
          <FiSearch />
        </div>
        <datalist id="locations" className={styles.searchData}>
          {searchData.map((item) => (
            <option key={item.id} value={item.name} />
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default Search;
