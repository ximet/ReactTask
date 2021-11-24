import React from 'react';
import styles from './Wrapper.modules.css';
import PropTypes from 'prop-types';

function Wrapper({ children }) {
  return <div className={styles.Wrapper}>{children}</div>;
}

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Wrapper;
