import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  const [hash, setHash] = useState(null);
  const currentHash = useLocation().pathname;

  useEffect(() => {
    setHash(currentHash);
  }, [currentHash]);

  return (
    <div className="header">
      <Link className="header__logo" to="/">WeatherApp</Link>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list-item">
            <Link
              className={`menu__list-link ${hash === '/' ? 'menu__list-link--is-active' : ''}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="menu__list-item">
            <Link
              className={`menu__list-link ${hash === '/info' ? 'menu__list-link--is-active' : ''}`}
              to="/info"
            >
              Info
            </Link>
          </li>
          <li className="menu__list-item">
            <Link
              className={`menu__list-link ${hash === '/feedback' ? 'menu__list-link--is-active' : ''}`}
              to="/feedback"
            >
              Feedback
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
