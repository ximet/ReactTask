import styles from './Header.css';

import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.listItem}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/countries" className={styles.listItem}>
              Countries
            </NavLink>
          </li>
          <li>
            <NavLink to="/details" className={styles.listItem}>
              Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback" className={styles.listItem}>
              Feedback
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className={styles.themeBtn}>Toggle theme</button>
    </header>
  );
};

export default Header;
