import React from 'react';
import styles from './Label.modules.css';
import PropTypes from 'prop-types';

function Label({ children }) {
  return <label className={styles.labelElement}>{children}</label>;
}

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default Label;
