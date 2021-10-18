import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

import NavBar from './NavBar/Navbar';
import SearchInput from '../../components/SearchInput/SearchInput';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

function Header() {
  return (
    <div className={styles.header}>
      <NavBar />
      <div className={styles.wrapper}>
        <SearchInput />
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Header;
