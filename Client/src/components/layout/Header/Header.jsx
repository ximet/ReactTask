import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Links/Nav/Nav';
import Wrapper from '../Wrapper/Wrapper';
import styles from './Header.modules.css';

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

export default Header;
