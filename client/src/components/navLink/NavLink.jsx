import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navLink.module.css';

function NavLink({ text, path, theme }) {
  return (
    <Link className={classes.link} data-theme={theme} to={path}>
      {text}
    </Link>
  );
}

export default NavLink;
