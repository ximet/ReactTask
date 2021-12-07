import React from 'react';
import styles from './Input.modules.css';
import PropTypes from 'prop-types';

function Input(props) {
  return <input className={styles.inputElement} {...props} />;
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
