import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <h1 className={classes.logo}>Weather</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
