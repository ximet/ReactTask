import DarkLightThemeContext from 'contexts/ThemeContext';
import React, { useContext } from 'react';
// import '../../styles/globals.scss';
import styles from './styles.module.scss';

const Info = () => {
  const { darkMode } = useContext(DarkLightThemeContext);

  return (
    <main className={darkMode ? styles.mainDark : styles.main}>
      <h1 className={styles.title}>Info page</h1>
    </main>
  );
};

export default Info;
