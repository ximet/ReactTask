import React from 'react';
import * as styles from '../../../styles/Nav.module.css';
import { DropdownMenu } from './DropdownMenu.js';

function Nav(props) {
  return (
    <nav className={styles.navBtnsList}>
      <DropdownMenu className={styles.navBtn} />
      <button className={styles.navBtn}>Daily</button>
      <button className={styles.navBtn}>Weekly</button>
      <button className={styles.navBtn}>Monthly</button>
    </nav>
  );
}

export { Nav };
