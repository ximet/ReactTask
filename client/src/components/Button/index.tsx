import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  type: 'button' | 'reset' | 'submit' | undefined;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ type, children }) => {
  return (
    <div>
      <button type={type} className={styles.searchBtn}>
        {children}
      </button>
    </div>
  );
};

export default Button;
