import React from 'react';
import * as styles from '../../../styles/Nav.module.css';
import * as darkStyles from '../../../styles/dark_mode/NavDark.module.css';
import { DropdownMenu } from './DropdownMenu.js';

function Nav(props) {
  return (
    <nav className={styles.navBtnsList}>
      <DropdownMenu className={`${styles.navBtn} ${props.darkMode ? darkStyles.navBtnColours : styles.navBtnColours}`} />
      <button className={`${styles.navBtn} ${props.darkMode ? darkStyles.navBtnColours : styles.navBtnColours}`}>Daily</button>
      <button className={`${styles.navBtn} ${props.darkMode ? darkStyles.navBtnColours : styles.navBtnColours}`}>Weekly</button>
      <button className={`${styles.navBtn} ${props.darkMode ? darkStyles.navBtnColours : styles.navBtnColours}`}>Monthly</button>
      <button className={`${styles.navBtn} ${props.darkMode ? darkStyles.navBtnColours : styles.navBtnColours}`}>Yearly</button>
    </nav>
  );
}

export { Nav };
