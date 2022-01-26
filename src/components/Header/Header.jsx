import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <Link className="header__logo" to="/">WeatherApp</Link>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list-item">
            <Link className="menu__list-link" to="/">Home</Link>
          </li>
          <li className="menu__list-item">
            <Link className="menu__list-link" to="/info">Info</Link>
          </li>
          <li className="menu__list-item">
            <Link className="menu__list-link" to="/feedback">Feedback</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
