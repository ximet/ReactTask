import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.modules.css';
function Button(props) {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.name}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
