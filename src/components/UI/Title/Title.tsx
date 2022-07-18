import React, { useContext } from 'react';
import { ThemeContext, ThemeContextConfig, Theme } from '../../../store/theme-context';
import styles from './Title.module.scss';

interface TitleProps {
  title: string;
}

const Title: React.FunctionComponent<TitleProps> = ({ title }) => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  return <h2 className={`${styles.title} ${theme === Theme.DARK && styles[theme]}`}>{title}</h2>;
};

export default Title;
