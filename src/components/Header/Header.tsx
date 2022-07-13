import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext, ThemeContextConfig } from '../../store/theme-context';
import styles from './Header.module.scss';

const Header: React.FunctionComponent = () => {
  const { theme, toggleTheme }: ThemeContextConfig = useContext(ThemeContext);
  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Nice Weather App</h1>
          <div className={styles.logo}></div>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.linkContainer}>
            <li className={styles.link}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={styles.link}>
              <NavLink
                to="/cities"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Cities
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                About
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink
                to="/contacts"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${styles.themeSwitcher} ${styles[theme]}`} onClick={toggleTheme}>
        <div className={styles.themeSwitcherButton}></div>
        <div className={styles.moonMaker}></div>
      </div>
    </header>
  );
};

export default Header;
