import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Nice Weather App</h1>
          <div className={styles.logo}></div>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/cities"
                style={({ isActive }) => (isActive ? { backgroundColor: '#fedc00' } : {})}
              >
                Cities
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? { backgroundColor: '#fedc00' } : {})}
              >
                About
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/contacts"
                style={({ isActive }) => (isActive ? { backgroundColor: '#fedc00' } : {})}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
