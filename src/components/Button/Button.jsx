import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, title, className }) {
  return (
    <button type="button" className={className} onClick={onClick}>{title}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
