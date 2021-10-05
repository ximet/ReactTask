import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Link.module.scss';

function NavLink(props) {
  return (
    <Link className={classes.link} to={props.path}>
      {props.content}
    </Link>
  );
}

export default NavLink;
