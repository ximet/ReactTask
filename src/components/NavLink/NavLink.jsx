import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './NavLink.module.scss';

function NavigationLink({ path, content }) {
  return (
    <NavLink exact className={styles.link} activeClassName={styles.active} to={path}>
      {content}
    </NavLink>
  );
}

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default NavigationLink;
