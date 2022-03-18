import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import burgerOpenIcon from '../../assets/images/burger-open.png';
import burgerCloseIcon from '../../assets/images/burger-close.png';

import './MobileNavigation.scss';

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => setIsOpen((prev) => !prev);

  const handleClose = (): void => setIsOpen(false);

  return (
    <div className="mobile-navigation">
      <button className="burger" type="button" onClick={handleClick}>
        <img src={isOpen ? burgerCloseIcon : burgerOpenIcon} className="burger-icon" alt="burger-menu" />
      </button>
      {
        isOpen && (
          <nav className="mobile-menu">
            <Link className="mobile-menu__logo" to="/">WeatherApp</Link>
            <ul className="mobile-menu__list">
              <li className="mobile-menu__list-item">
                <NavLink onClick={handleClose} exact className="mobile-menu__list-link" activeClassName="mobile-menu__list-link--is-active" to="/">
                  My location
                </NavLink>
              </li>
              <li className="mobile-menu__list-item">
                <NavLink onClick={handleClose} exact className="mobile-menu__list-link" activeClassName="mobile-menu__list-link--is-active" to="/info">
                  Info
                </NavLink>
              </li>
              <li className="mobile-menu__list-item">
                <NavLink onClick={handleClose} exact className="mobile-menu__list-link" activeClassName="mobile-menu__list-link--is-active" to="/feedback">
                  Feedback
                </NavLink>
              </li>
            </ul>
          </nav>
        )
      }
    </div>
  );
}

export default MobileNavigation;
