import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  type: 'button' | 'reset' | 'submit' | undefined;
  children: ReactNode;
  className: string;
}

const Button: FC<ButtonProps> = ({ type, children, className }) => {
  return (
    <div>
      <button type={type} className={`${styles[className]}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
