import React, { useContext } from 'react';
import { ThemeContext, ThemeContextConfig, Theme } from '../../../store/theme-context';
import styles from './Card.module.scss';

interface CardProps {
  id?: string;
}

const Card: React.FunctionComponent<CardProps> = ({ children, id }) => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  return (
    <section className={`${styles.card} ${theme === Theme.DARK && styles[theme]}`} id={id}>
      {children}
    </section>
  );
};

export default Card;
