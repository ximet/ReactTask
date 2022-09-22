import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

enum ButtonStyles {
  ThemeBtn = 'themeBtn',
  IconBtn = 'searchBtn',
  FormBtn = 'formBtn'
}
interface ButtonProps {
  type: 'button' | 'reset' | 'submit' | undefined;
  children: ReactNode;
  className: string;
  onClick?: (
    event: React.FormEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const Button: FC<ButtonProps> = ({ type, children, className, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={`${styles[ButtonStyles[className]]}`}>
      {children}
    </button>
  );
};

export default Button;
