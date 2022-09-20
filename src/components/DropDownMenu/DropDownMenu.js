import { useEffect, useState } from 'react';
import styles from './DropDownMenu.module.css';

import { DROP_DOWN_MENU_LABEL } from '../constants';
import { getCities } from '../../services/weatherService';

import  ErrorModal  from '../Error/ErrorModal/ErrorModal';

const getErrorDetails = (type, title, message) => ({ type, title, message });

const POSSIBLE_ERRORS = {
    GET_CITIES: getErrorDetails('GET_CITIES', 'Server error', 'Cannot get cities')
};

const DropDownMenu = () => {
    const [searchValue, setSearchValue] = useState('');
    const [cities, setCities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCities(searchValue)
            .then(result => {
                setCities(result.locations);
            })
            .catch(err => {
                console.log(err);
                //setError(POSSIBLE_ERRORS.GET_CITIES)
            });
    }, [searchValue]);

    const getSearchedValue = e => setSearchValue(e.target.value);

    const errorConfirmHandler = e => setError(null)

    const isError = error
        ? <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorConfirmHandler}
        />
        : null

    return (
        <div className={styles.dropdownMenuContainer}>
            <>{isError}</>
            <label>
                {DROP_DOWN_MENU_LABEL}
                <input list="cities" name="choose-city" onChange={e => getSearchedValue(e)} />
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
