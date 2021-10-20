import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navLink.module.css';
import PropTypes from 'prop-types';

function NavLink(props) {
  console.log(typeof props.theme);
  return (
    <Link className={classes.link} to={props.path}>
      {props.text}
    </Link>
  );
}

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavLink;
