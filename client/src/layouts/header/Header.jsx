import React from 'react';
import classes from './header.module.css'
import NavLink from '../../components/navLink/NavLink';

function Header() {
  return (
    <div className={classes.container}>
      <NavLink text="link" path="/"/>
    </div>
  )
}

export default Header;
