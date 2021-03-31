import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

function Button({ onClick, title }) {
  return (
    <button type="button" className={styles.menuButton} onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Button;
