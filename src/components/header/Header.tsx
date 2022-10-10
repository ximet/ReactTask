import styles from './Header.css';

import React, { FC, useState, useEffect, useRef, useContext, MouseEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { themeSelector } from 'store/theme/themeSelector';
import { toggleTheme } from 'store/theme/themeAction';
import classNames from 'classnames';
import { LocationInfoType } from 'types/cityInfoType';
import { positionContext } from '../../context/positionContext';
import { BsSun } from 'react-icons/bs';
import { TbMoonStars } from 'react-icons/tb';
import { usePosition } from 'hooks/usePosition';
import { getCitiesSearchResults } from 'services/getCity';

type LinkType = {
  isActive: boolean;
};

const setActive = ({ isActive }: LinkType) =>
  isActive ? `${styles.listItem} ${styles['active-link']}` : styles.listItem;

const Header: FC = () => {
  const timeoutId = useRef(0);
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [cities, setCities] = useState<LocationInfoType[]>([]);
  const { changePosition } = useContext(positionContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { position } = usePosition();

  const theme = useSelector(themeSelector);

  const cityClickHandler = (lat: number, lon: number) => {
    setSearchText('');
    setCities([]);
    changePosition(lat, lon);
    navigate(`/${lon},${lat}`);
  };

  useEffect(() => {
    clearTimeout(timeoutId.current);

    if (searchText) {
      timeoutId.current = window.setTimeout(
        () => getCitiesSearchResults(searchText).then(res => setCities(res.locations)),
        1000
      );
    } else {
      setCities([]);
    }
  }, [searchText]);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const hamburgerHandler = (e: MouseEvent<HTMLDivElement>) => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <header className={styles.header}>
      <nav>
        <div
          className={classNames(styles['hamburger'], isShowMenu ? styles['hamburger_active'] : '')}
          onClick={hamburgerHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={classNames(styles['nav-list'], isShowMenu ? styles['nav-list_active'] : '')}>
          <li>
            <NavLink
              to="/"
              className={setActive}
              onClick={() => changePosition(position.latitude, position.longitude)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/countries" className={setActive}>
              Countries
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={setActive}>
              About
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
                <div
                  key={city.id}
                  className={styles['search-results__item']}
                  onClick={() => cityClickHandler(city.lat, city.lon)}
                >
                  {city.name}, {city.country}
                </div>
              ))
            : null}
        </div>
      </div>
      <button className={styles.themeBtn} onClick={() => dispatch(toggleTheme())}>
        {theme === 'light' ? <BsSun size="30px" /> : <TbMoonStars size="30px" />} theme
      </button>
    </header>
  );
};

export default Header;
