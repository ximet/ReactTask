import DarkLightThemeContext from 'contexts/ThemeContext';
import React, { useContext } from 'react';
import styles from './styles.module.scss';

const Feedback = () => {
  const { darkMode } = useContext(DarkLightThemeContext);

  return (
    <main className={darkMode ? styles.mainDark : styles.main}>
      <h1 className={styles.title}>Feedback Page</h1>
    </main>
  );
};

export default Feedback;
