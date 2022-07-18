import React, { useContext } from 'react';
import { ThemeContext, ThemeContextConfig, Theme } from '../../../store/theme-context';
import styles from './Card.module.scss';

const Card: React.FunctionComponent = ({ children }) => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  return (
    <section className={`${styles.card} ${theme === Theme.DARK && styles[theme]}`}>
      {children}
    </section>
  );
};

export default Card;
