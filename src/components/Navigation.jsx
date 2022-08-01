import React from 'react';
import NavLinks from './NavLinks';
import NavControls from './NavControls';

const navigationPaths = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact us', path: '/contacts' }
];

export default function Navigation(props) {
  return (
    <nav className="container flex-row">
      <NavLinks />
      <NavControls changeTheme={props.changeTheme} theme={props.currentTheme} />
    </nav>
  );
}
