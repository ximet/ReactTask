import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent = () => {
  return (
    <header style={{ padding: 20 }}>
      <h1>Nice Weather App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
