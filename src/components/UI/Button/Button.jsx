import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({
  onClick,
  className,
  children,
}) => (
  <button
    onClick={onClick}
    className={[styles.button, className].join(' ')}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
