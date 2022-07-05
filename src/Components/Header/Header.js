import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = props => {
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
        <div className={styles.themeBtn} onClick={props.changeTheme}>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
