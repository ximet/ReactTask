import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import classes from './NavBar.module.css';
import ThemeSwitcher from '../../atomic-components/ThemeSwitcher/ThemeSwitcher';
import weatherLogo from '../../../public/images/weatherLogo.png';

function NavBar({ token, theme, onToggleTheme }) {
  return (
    <div className={classes.navBar} data-theme={theme}>
      <div className={classes.navBar_container}>
        <div>
          <NavLink to="/" className={classes.navBar_logo}>
            <img src={weatherLogo} alt="weather logo" className={classes.weather_logo} />
            FakeForeca
          </NavLink>
        </div>

        <div className={classes.search_menu}>
          <SearchInput token={token} theme={theme} />

          <ul className={classes.navBar_menu}>
            <li className={classes.navBar_item}>
              <NavLink
                exact
                to="/"
                className={classes.navBar_link}
                activeClassName={classes.navBar_active_link}
              >
                Home
              </NavLink>
            </li>
            <li className={classes.navBar_item}>
              <NavLink
                to="/info"
                className={classes.navBar_link}
                activeClassName={classes.navBar_active_link}
              >
                Info
              </NavLink>
            </li>
            <li className={classes.navBar_item}>
              <NavLink
                to="/feedback"
                className={classes.navBar_link}
                activeClassName={classes.navBar_active_link}
              >
                Feedback
              </NavLink>
            </li>
          </ul>

          <ThemeSwitcher theme={theme} onToggleTheme={onToggleTheme} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
