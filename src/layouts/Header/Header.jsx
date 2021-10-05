import React from 'react';

import classes from './Header.module.scss';

import NavBar from './NavBar/Navbar';
import SearchInput from '../../components/SearchInput/SearchInput';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

function Header() {
  return (
    <div className={classes.header}>
      <NavBar />
      <div className={classes.wrapper}>
        <SearchInput />
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Header;
