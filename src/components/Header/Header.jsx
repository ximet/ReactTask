import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchInput from '../SearchInput/SearchInput';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <h1 className={classes.logo}>Weather</h1>
        <Navbar />
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
