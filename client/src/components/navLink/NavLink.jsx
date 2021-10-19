import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navLink.module.css';
import { navlinkPathType } from './types';

function NavLink(props) {
  return (
    <Link className={`${classes.link} ${props.theme}`} to={props.path}>
      {props.text}
    </Link>
  );
}

NavLink.propTypes = {
  path: navlinkPathType
};

export default NavLink;
