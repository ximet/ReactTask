import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

function Button({ onClick, children }) {
  return (
    <button type="button" className={styles.menuButton} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
