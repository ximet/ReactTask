import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import classes from './NavBar.module.css';
import ThemeSwitcher from '../../atomic-components/ThemeSwitcher/ThemeSwitcher';
import { ThemeContext } from '../../providers/themeContext';
import weatherLogo from '../../../public/images/weatherLogo.png';

function NavBar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classes.navBar} data-theme={theme}>
      <div className={classes.navBar_container}>
        <div className={classes.navBar_logo_wrapper}>
          <NavLink to="/" className={classes.navBar_logo}>
            <img src={weatherLogo} alt="weather logo" className={classes.weather_logo} />
            FakeForeca
          </NavLink>
        </div>

        <div className={classes.search_navBar_wrapper}>
          <div className={classes.search_menu}>
            <SearchInput />
          </div>

          <div className={classes.navBar_menu_wrapper}>
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

            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
