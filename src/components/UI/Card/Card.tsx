import React, { useContext } from 'react';
import { Theme, ThemeContext, ThemeContextConfig } from 'store';
import styles from './Card.module.scss';

interface CardProps {
  id?: string;
  width?: string;
}

const Card: React.FunctionComponent<CardProps> = ({ children, id, width }) => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  return (
    <section
      className={`${styles.card} ${theme === Theme.DARK && styles[theme]}`}
      id={id}
      style={{ width: width }}
    >
      {children}
    </section>
  );
};

export default Card;
