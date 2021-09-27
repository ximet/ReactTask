import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navLink.module.css';

function NavLink( props ) {
  console.log(props.theme)
  return (
    <Link className={`${classes.link} ${props.theme}`} to={props.path}>
      {props.text}
    </Link>
  );
}

export default NavLink;
