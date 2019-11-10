import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({
  name,
  clickHandler,
  className,
  alignRight,
}) => (
  <button
    onClick={clickHandler}
    className={[styles.button, className, alignRight ? styles.right : ''].join(' ')}
    type="button">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
  alignRight: PropTypes.string,
};

export default Button;
