import React from 'react';
import config from '../../config/config';
import Logo from '../../assets/images/logo.svg';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <img src={Logo} className={styles.logoImg} alt={config.name} />
    <h1 className={styles.logoTitle}>{config.name}</h1>
  </header>
);

export default Header;
