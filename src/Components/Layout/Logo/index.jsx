import React from 'react';
import styles from './Logo.sass';

const APP_LOGO = {
  src: require('assets/images/logo.svg'),
  altText: 'App Logo',
}

const AppLogoLink = () => {
  return (
    <a
      href="index.html"
      className={styles.logo}
    >
      <img
        className={styles.logoImg}
        src={APP_LOGO.src}
        alt={APP_LOGO.altText}
      />
      Logo
    </a>
  );
};

export default AppLogoLink;
