import React from 'react';
import styles from './Card.module.scss';

const Card: React.FunctionComponent = ({ children }) => {
  return <section className={styles.card}>{children}</section>;
};

export default Card;
