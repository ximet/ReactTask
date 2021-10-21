import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navLink.module.css';
import PropTypes from 'prop-types';

function NavLink(props) {
  return (
    <Link className={classes.link} to={props.path}>
      {props.children}
    </Link>
  );
}

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default NavLink;
