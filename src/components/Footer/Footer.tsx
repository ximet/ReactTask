import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Nice Weather App</p>
        <p>Created by Živilė @Coherent Solutions</p>
        <p>&copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
