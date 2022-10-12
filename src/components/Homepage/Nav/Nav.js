import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from '../../../styles/Nav.module.css';
import { DropdownMenu } from './DropdownMenu.js';

function Nav(props) {
  const navigate = useNavigate();

  const navigateToAbout = () => navigate('/about');

  return (
    <nav className={styles.navBtnsList}>
      <DropdownMenu navBtnClassName={styles.navBtn} />
      <button className={styles.navBtn}>Daily</button>
      <button className={styles.navBtn}>Weekly</button>
      <button className={styles.navBtn}>Monthly</button>
      <button className={styles.navBtn}>Yearly</button>
      <button onClick={navigateToAbout} className={styles.navBtn}>About us</button>
    </nav>
  );
}

export { Nav };
