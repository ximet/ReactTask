import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../Context/UserContext';
import FilterableList from '../FilterableList/FilterableList';
import Button from '../Button/Button';
import MenuList from '../MenuList/MenuList';
import styles from './Header.scss';
import axios from 'axios';
import { useHistory } from 'react-router';

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [cities, setCities] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleClick = () => {
    setIsVisible(prev => !prev);
  };

  const context = useContext(UserContext);
  const token = context.token !== '' && context.token;

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    if (token !== false && inputValue !== '') {
      try {
        axios
          .get(`https://pfa.foreca.com/api/v1/location/search/${inputValue}`, {
            headers: {
              Authorization: `Bearer ${token}`
            },
            cancelToken: cancelTokenSource.source
          })
          .then(res => {
            console.log(res);
            const dataCities = res.data.locations.map(city => {
              return {
                name: `${city.name.toLowerCase()}`,
                country: `${city.country.toLowerCase()}`,
                id: city.id
              };
            });
            setCities(dataCities);
          });
      }
      catch (error) {
        history.push('/error')
      }
    }
    return () => cancelTokenSource.cancel();
  }, [inputValue]);

  useEffect(() => {
    setCities([]);
  }, [isVisible]);

  const changeValue = event => {
    setInputValue(event.target.value.toLowerCase());
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Button onClick={handleClick} title="Cities" className={`${styles.menuBtn}`} />
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
