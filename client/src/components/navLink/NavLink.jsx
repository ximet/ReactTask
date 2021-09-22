import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navLink.module.css'

function NavLink({path, text}) {
  return (
    <Link className={classes.mSize, classes.link} to={path}>
      {text}
    </Link>
  )
}

export default NavLink;
