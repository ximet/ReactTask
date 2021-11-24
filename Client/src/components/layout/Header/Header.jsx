import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Links/Nav/Nav';
import styles from './Header.modules.css';
import PropTypes from 'prop-types';

function Header() {
  return (
    <div className={styles.header}>
      <div>Logo</div>
      <nav>
        <ul>
          <Nav>
            <Link to="/">Home</Link>
          </Nav>
          <Nav>
            <Link to="/explore">Explore</Link>
          </Nav>
          <Nav>
            <Link to="/information">Information</Link>
          </Nav>
          <Nav>
            <Link to="/feedback">Feedback</Link>
          </Nav>
        </ul>
      </nav>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
