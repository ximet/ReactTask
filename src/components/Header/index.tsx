// @ts-ignore
import React from 'react';
// @ts-ignore
import { NavLink } from 'react-router-dom';
// @ts-ignore
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.menuNav}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="details" className={styles.link}>
          Details
        </NavLink>
        <NavLink to="feedback" className={styles.link}>
          Feedback
        </NavLink>
        <NavLink to="info" className={styles.link}>
          Info
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
