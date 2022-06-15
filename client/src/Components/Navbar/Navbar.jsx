import React from 'react';
import { Nav, NavLink } from './Navbar.styles';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/cities">Search</NavLink>
      <ToggleSwitch />
    </Nav>
  );
};

export default Navbar;
