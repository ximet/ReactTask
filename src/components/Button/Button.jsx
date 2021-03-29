import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

function Button({ onClick }) {
  return (
    <button type="button" className={styles.menuBtn} onClick={onClick}>
      Menu
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;
