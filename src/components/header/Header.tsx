import styles from './Header.css';

import React, { FC, useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { getCity } from 'services/getCity';
import HTTPRequest from 'services/httpService';
import { LocationInfoType } from 'types/cityInfoType';

type LinkType = {
  isActive: boolean;
};

const setActive = ({ isActive }: LinkType) =>
  isActive ? `${styles.listItem} ${styles['active-link']}` : styles.listItem;

const Header: FC = () => {
  const timeoutId = useRef(0);
  const [searchText, setSearchText] = useState<string>('');
  const [cities, setCities] = useState<LocationInfoType[]>([]);

  const getCities = async (search: string): Promise<{ locations: LocationInfoType[] }> => {
    const result = await HTTPRequest(`/api/v1/location/search/${search}`, {});
    return result;
  };

  useEffect(() => {
    clearTimeout(timeoutId.current);

    if (searchText) {
      timeoutId.current = window.setTimeout(
        () => getCities(searchText).then(res => setCities(res.locations)),
        1000
      );
    } else {
      setCities([]);
    }
  }, [searchText]);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={setActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/countries" className={setActive}>
              Countries
            </NavLink>
          </li>
          <li>
            <NavLink to="/details" className={setActive}>
              Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback" className={setActive}>
              Feedback
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles['search-group']}>
        <input
          placeholder="search city..."
          type="text"
          className={styles['search-input']}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <div className={styles['search-results']}>
          {cities.length
            ? cities.map(city => (
                <div key={city.id} className={styles['search-results__item']}>
                  {city.name}, {city.country}
                </div>
              ))
            : null}
        </div>
      </div>
      <button className={styles.themeBtn}>Toggle theme</button>
    </header>
  );
};

export default Header;
