import React from 'react';
import classes from './Navbar.module.scss';

function Navbar() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <a href="">Home</a>
        </li>
        <li className={classes.nav__item}>
          <a href="">Weather</a>
        </li>
        <li className={classes.nav__item}>
          <a href="">About</a>
        </li>
        <li className={classes.nav__item}>
          <a href="">Feedback</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
