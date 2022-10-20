import { useEffect, useState } from 'react';
import styles from './Home.module.css';

import { getCities } from '../../services/weatherService';
import { POSSIBLE_ERRORS } from '../../components/Error/errorHandlingHelper';
import ErrorModal from '../../components/Error/ErrorModal/ErrorModal';
import { useNavigate } from 'react-router-dom';

const DROP_DOWN_MENU_LABEL = 'Choose a city:';

const DropDownMenu = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);
  const [inputId, setInputId] = useState('');

  const navigate = useNavigate();

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

  const handleChange = e => setInputId(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`city/${inputId}`);
  };

  return (
    <div className={styles.dropdownMenuContainer}>
      <>
        {error && (
          <ErrorModal title={error.title} message={error.message} onConfirm={errorConfirmHandler} />
        )}
      </>

      <form onSubmit={handleSubmit}>
        <label className={styles.text}>{DROP_DOWN_MENU_LABEL}</label>
        <input
          list="cities"
          name="choose-city"
          onChange={e => getSearchedValue(e)}
          value={searchValue}
          placeholder="Search"
        />
        <select id="cities" onChange={handleChange} size={cities.length}>
          <option value="-">-</option>
          {cities.length > 0
            ? cities.map(city => (
                <option key={city.id} value={city.id}>
                  {city.name} , {city.country}
                </option>
              ))
            : null}
        </select>
        <input type="submit" value="Show" className={styles.submit} />
      </form>
    </div>
  );
};

export default DropDownMenu;
