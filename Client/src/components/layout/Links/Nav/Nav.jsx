import React from 'react';
import styles from './Nav.modules.css';
import PropTypes from 'prop-types';

function Nav({ children }) {
  return <li className={styles.nav}>{children}</li>;
}

Nav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired
};
export default Nav;
