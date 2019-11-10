import React from 'react';
import { applicationConfig } from '../../config/config';
import Logo from '../../assets/images/logo.svg';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <img src={Logo} height="80%" alt={applicationConfig.name} />
    <h1 className={styles.logoTitle}>{applicationConfig.name}</h1>
  </header>
);

export default Header;
