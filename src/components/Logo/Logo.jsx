import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Logo.module.scss';
import logo from '../../assets/images/logo.png';

function Logo() {
  return (
    <NavLink to="/">
      <img src={logo} alt="Logo" className={classes.logo} />
    </NavLink>
  );
}

export default Logo;
