import React, { useContext } from 'react';
import { Theme, ThemeContext, ThemeContextConfig } from 'store';
import styles from './Title.module.scss';

interface TitleProps {
  title: string;
  fontSize?: string;
}

const Title: React.FunctionComponent<TitleProps> = ({ title, fontSize }) => {
  const { theme }: ThemeContextConfig = useContext(ThemeContext);
  return (
    <h2 className={`${styles.title} ${theme === Theme.DARK && styles[theme]}`} style={{ fontSize }}>
      {title}
    </h2>
  );
};

export default Title;
