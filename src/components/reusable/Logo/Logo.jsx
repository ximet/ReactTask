import React from 'react';
import styles from './Logo.scss';

const Logo = ({ logoContent }) => (
  <div className={ styles.logo }>
    <span className={ styles.logoText }>{ logoContent.text }</span>
  </div>
);

export default Logo;