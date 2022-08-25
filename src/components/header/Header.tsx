import styles from './Header.css';
import React from 'react';

import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#" className={styles.listItem}>
              Countries
            </a>
          </li>
          <li>
            <a href="#" className={styles.listItem}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.listItem}>
              Details
            </a>
          </li>
          <li>
            <a href="#" className={styles.listItem}>
              Feedback
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles.themeBtn}>Toggle theme</button>
    </header>
  );
};

export default Header;
