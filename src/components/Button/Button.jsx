import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Button.Styles';

function Button({ onClick, children }) {
  return (
    <Styled.Button type="button" onClick={onClick}>
      {children}
    </Styled.Button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
