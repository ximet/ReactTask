import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import UserContext from '../../Context/UserContext';
import FilterableList from '../FilterableList/FilterableList';
import Button from '../Button/Button';
import MenuList from '../MenuList/MenuList';
import styles from './Header.scss';



function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [cities, setCities] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const changeFilterableListProperties = () => {
    setIsVisible(isVisible => !isVisible);
    setCities([]);
  };

  const context = useContext(UserContext);
  const token = context.token;

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    if (token !== '' && inputValue !== '') {
      try {
        axios
          .get(`https://pfa.foreca.com/api/v1/location/search/${inputValue}`, {
            headers: {
              Authorization: `Bearer ${token}`
            },
            cancelToken: cancelTokenSource.source
          })
          .then(res => {
            const dataCities = res.data.locations.map(city => {
              return {
                name: `${city.name.toLowerCase()}`,
                country: `${city.country.toLowerCase()}`,
                id: city.id
              };
            });
            setCities(dataCities);
          });
      } catch (error) {
        history.push('/error');
      }
    }
    return () => cancelTokenSource.cancel();
  }, [inputValue]);

  const changeValue = event => {
    setInputValue(event.target.value.toLowerCase());
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Button onClick={changeFilterableListProperties} children="Cities" />
        {isVisible && (
          <FilterableList items={cities} onChange={changeValue} inputValue={inputValue} />
        )}
      </nav>
      <div className={styles.header__titleContainer}>
        <MenuList />
      </div>
    </header>
  );
}

export default Header;
