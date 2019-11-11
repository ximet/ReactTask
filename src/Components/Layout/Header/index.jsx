import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.sass';

const Header = (props) => {
  return (
    <header className={styles.header}>
      {props.children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

export default Header;
