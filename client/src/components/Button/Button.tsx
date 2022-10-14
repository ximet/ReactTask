import React, { FunctionComponent, MouseEvent, ButtonHTMLAttributes } from 'react';

// Styles
import * as S from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FunctionComponent<ButtonProps> = ({ color, children, onClick, ...otherProps }) => (
  <S.Button color={color} onClick={onClick} {...otherProps}>
    {children}
  </S.Button>
);

export default Button;
