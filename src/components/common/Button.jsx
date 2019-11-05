import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, style, onClick }) => (
  <button
    type="button"
    style={{
      cursor: 'pointer',
      border: 'none',
      padding: '0.75rem 1.75rem',
      backgroundColor: '#44639c',
      borderRadius: '0.25rem',
      color: '#eee',
      fontSize: '1.5rem',
      ...style,
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};

Button.defaultProps = {
  style: {},
};

export default Button;
