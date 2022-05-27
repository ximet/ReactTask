import React from 'react';
import { Nav, NavLink, ThemeButton } from './Navbar.styles';
const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/cities">Search</NavLink>
    </Nav>
  );
};

export default Navbar;
