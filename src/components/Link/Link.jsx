import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classes from './Link.module.scss';

function NavLink({ path, content }) {
  return (
    <Link className={classes.link} to={path}>
      {content}
    </Link>
  );
}

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default NavLink;
