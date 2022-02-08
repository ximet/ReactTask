import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

function NavBar() {
  return (
    <div className={classes.navBar}>
      <div className={classes.navBar_container}>
        <Link to="/" className={classes.navBar_logo}>
          WeatherLogo <i className={classes['fas fa-typo3']} />
        </Link>
        <ul className={classes.navBar_menu}>
          <li className={classes.navBar_item}>
            <Link to="/" className={classes.navBar_link}>
              Home
            </Link>
          </li>
          <li className={classes.navBar_item}>
            <Link to="/info" className={classes.navBar_link}>
              Info
            </Link>
          </li>
          <li className={classes.navBar_item}>
            <Link to="/feedback" className={classes.navBar_link}>
              Feedback
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
