import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.modules.css';
function Button(props) {

  const [buttonStyles, setButtonStyles] = useState()

  useEffect(() => {
    const classes = {
      regular: styles.button,
      search: styles.searchButton
    }

    switch (props.buttonIs) {
      case 'regular': setButtonStyles(classes.regular)
        break;
      case 'searchButton': setButtonStyles(classes.search)
        break;
      default: ''

    }
  }, [])


  return (
    <button type={props.type} className={buttonStyles} onClick={props.onClick}>
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
