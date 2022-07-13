import React, { useContext } from 'react';
import { ThemeContext, ThemeContextConfig } from '../../../store/theme-context';
import styles from './Card.module.scss';

const Card: React.FunctionComponent = ({ children }) => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  return <section className={`${styles.card} ${styles[theme]}`}>{children}</section>;
};

export default Card;
