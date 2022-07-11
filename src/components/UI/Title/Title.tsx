import React from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  title: string;
}

const Title: React.FunctionComponent<TitleProps> = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default Title;
