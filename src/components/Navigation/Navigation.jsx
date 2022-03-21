import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navigation.scss';

function Navigation() {
  return (
    <nav className="menu">
      <Link className="menu__logo" to="/">WeatherApp</Link>
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
  );
}

export default Navigation;
