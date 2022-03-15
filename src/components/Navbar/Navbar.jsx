import React from 'react';
import classes from './Navbar.module.scss';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li>
          <Link className={classes.nav__item} to="/">
            Weather
          </Link>
        </li>
        <li>
          <Link className={classes.nav__item} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={classes.nav__item} to="/feedback">
            Feedback
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
