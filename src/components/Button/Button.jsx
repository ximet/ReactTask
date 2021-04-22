import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.Styles';

function Button({ onClick, children }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
