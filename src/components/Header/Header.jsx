import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Search from '../Search/Search';

import SwitcherTheme from '../ThemeSwitcher/ThemeSwitcher';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Link className="header__logo" to="/">WeatherApp</Link>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <NavLink exact className="menu__list-link" activeClassName="menu__list-link--is-active" to="/">
                My location
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink exact className="menu__list-link" activeClassName="menu__list-link--is-active" to="/info">
                Info
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink exact className="menu__list-link" activeClassName="menu__list-link--is-active" to="/feedback">
                Feedback
              </NavLink>
            </li>
          </ul>
        </nav>
        <Search />
      </div>
      <SwitcherTheme />
    </div>
  );
}

export default Header;
