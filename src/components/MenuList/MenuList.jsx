import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuList.scss';

function MenuList() {
  return (
    <ul className={styles.container}>
      <li className={styles.container__items}>
        <Link to="/" className={styles.container__link}>
          Home
        </Link>
      </li>
      <li className={styles.container__items}>
        <Link to="/feedback" className={styles.container__link}>
          Rate Us
        </Link>
      </li>
      <li className={styles.container__items}>
        <Link to="/about" className={styles.container__link}>
          About Us
        </Link>
      </li>
    </ul>
  );
}

export default MenuList;
