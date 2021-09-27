import React from 'react';
import NavLink from '../../../components/navLink/NavLink';
import classes from './navbar.module.css';

function NavBar({ theme }) {
  return (
    <div className={classes.container}>
      <NavLink text={'info'} path={'/info'} theme={theme} />
      <NavLink text={'feedback'} path={'/feedback'} theme={theme} />
    </div>
  );
}

export default NavBar;
