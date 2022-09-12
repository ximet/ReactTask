import { useState } from 'react';
import styles from './DropDownMenu.module.css';

import { initialCities } from './constants.js';

function DropDownMenu() {
  const [searchValue, setSearchValue] = useState(null);

  const getSearchedValue = e => setSearchValue(e.target.value);

  const citiesToShow = searchValue
    ? initialCities.filter(city => city.cityName.includes(searchValue))
    : initialCities;

  return (
    <div className={styles.dropdownMenuContainer}>
      <label>
        Choose a city from this list:
        <input list="cities" name="choose-city" onChange={e => getSearchedValue(e)} />
      </label>
      <datalist id="cities">
        {citiesToShow.map(city => (
          <option key={city.id} value={city.cityName} />
        ))}
      </datalist>
    </div>
  );
}

export default DropDownMenu;
