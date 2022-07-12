import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

import ThemeBtn from '../ThemeBtn/ThemeBtn';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
          </ul>
        </nav>
        <ThemeBtn />
      </div>
    </header>
  );
};

export default Header;
