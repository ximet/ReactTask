import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
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
