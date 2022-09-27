import { useEffect, useState } from 'react';
import styles from './DropDownMenu.module.css';

import { DROP_DOWN_MENU_LABEL } from '../constants';
import { getCities } from '../../services/weatherService';

import { POSSIBLE_ERRORS } from '../Error/errorHandlingHelper';

import ErrorModal from '../Error/ErrorModal/ErrorModal';

const DropDownMenu = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchValue) {
      getCities(searchValue)
        .then(result => {
          setCities(result.locations);
        })
        .catch(() => {
          setError(POSSIBLE_ERRORS.GET_CITIES);
        });
    }
  }, [searchValue]);

  const getSearchedValue = e => setSearchValue(e.target.value);

  const errorConfirmHandler = () => {
    setError(null);
    setSearchValue('');
  };

  return (
    <div className={styles.dropdownMenuContainer}>
      <>
        {error && (
          <ErrorModal title={error.title} message={error.message} onConfirm={errorConfirmHandler} />
        )}
      </>
      <label>
        {DROP_DOWN_MENU_LABEL}
        <input
          list="cities"
          name="choose-city"
          onChange={e => getSearchedValue(e)}
          value={searchValue}
        />
      </label>
      <datalist id="cities">
        {cities.length > 0
          ? cities.map(city => (
              <option key={city.id} value={city.name}>
                {city.name} , {city.country}
              </option>
            ))
          : null}
      </datalist>
    </div>
  );
};

export default DropDownMenu;
