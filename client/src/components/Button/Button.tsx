import React, { FunctionComponent } from 'react';

// Styles
import * as S from './Button.styles';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  ariaLabel: string;
}

const Button: FunctionComponent<ButtonProps> = ({ type, color, ariaLabel, children }) => (
  <S.Button type={type} color={color} aria-label={ariaLabel}>
    {children}
  </S.Button>
);

export default Button;
