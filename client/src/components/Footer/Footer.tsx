import DarkLightThemeContext from 'contexts/ThemeContext';
import React, { useContext } from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const { darkMode } = useContext(DarkLightThemeContext);

  return (
    <footer className={darkMode ? styles.footerDark : styles.footer}>
      <p className={styles.date}>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
