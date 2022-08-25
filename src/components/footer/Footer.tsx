import styles from './Footer.css';
import React from 'react';

import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© Andrei Shulha</p>
    </footer>
  );
};

export default Footer;
