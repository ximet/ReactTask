import React from 'react';
import { getCurrentYear } from '../../utils/getFormattedDate';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <span>Made by J.Ell. during the React training</span>
      <span> &copy; IsSoft Solutions, {getCurrentYear()}</span>
    </div>
  );
}

export default Footer;
