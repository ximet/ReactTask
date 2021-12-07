import React from 'react';
import styles from './Title.modules.css';
import PropTypes from 'prop-types';

function Title({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default Title;
