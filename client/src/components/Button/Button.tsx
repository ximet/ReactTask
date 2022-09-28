import React, { FunctionComponent } from 'react';

// Styles
import * as S from './Button.styles';

interface ButtonProps {
  color?: string;
}

const Button: FunctionComponent<ButtonProps> = ({ color, children }) => (
  <S.Button color={color}>{children}</S.Button>
);

export default Button;
