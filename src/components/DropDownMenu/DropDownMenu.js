import { useState } from 'react';
import styles from './DropDownMenu.module.css';

import { initialCities } from './constants.js';
import { DROP_DOWN_MENU_LABEL } from '../constants';

const DropDownMenu = () => {
  const [searchValue, setSearchValue] = useState(null);

  const getSearchedValue = e => setSearchValue(e.target.value);

  const citiesToShow = searchValue
    ? initialCities.filter(city => city.cityName.includes(searchValue))
    : initialCities;

  return (
    <div className={styles.dropdownMenuContainer}>
      <label>
        {DROP_DOWN_MENU_LABEL}
        <input list="cities" name="choose-city" onChange={e => getSearchedValue(e)} />
      </label>
      <datalist id="cities">
        {citiesToShow.map(city => (
          <option key={city.id} value={city.cityName} />
        ))}
      </datalist>
    </div>
  );
};

export default DropDownMenu;
