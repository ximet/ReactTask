import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <span>Made by J.Ell. during the React training</span>
      <span> &copy; IsSoft Solutions, 2021</span>
    </div>
  );
}

export default Footer;
