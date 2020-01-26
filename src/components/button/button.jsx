import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonView = styled.button`
  display: inline-block;
  color: #A52A2A;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #A52A2A;
  border-radius: 3px;
  cursor: pointer;
  background: white;
`;

const Button = ({ text, onClick }) => <ButtonView type="button" onClick={onClick}>{text}</ButtonView>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Button;
