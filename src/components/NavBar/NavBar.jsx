import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import classes from './NavBar.module.css';

function NavBar({ token }) {
  return (
    <div className={classes.navBar}>
      <div className={classes.navBar_container}>
        <div>
          <Link to="/" className={classes.navBar_logo}>
            WeatherLogo <i className="fas fa-typo3" />
          </Link>
        </div>

        <div className={classes.search_menu}>
          <SearchInput token={token} />

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
    </div>
  );
}

export default NavBar;
