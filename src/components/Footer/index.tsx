// @ts-ignore
import React from 'react';
// @ts-ignore
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.date}>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
