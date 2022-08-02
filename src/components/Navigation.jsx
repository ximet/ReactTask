import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import NavControls from './NavControls';

export default function Navigation(props) {
  return (
    <nav>
      <NavLinks />
      <Link to="/" className="logo">Whatever Weather</Link>
      <NavControls changeTheme={props.changeTheme} theme={props.currentTheme} />
    </nav>
  );
}
