import DarkLightThemeContext from 'contexts/ThemeContext';
import React, { useContext } from 'react';
import styles from './SecondaryPagesLayout.module.scss';

const SecondaryPagesLayout = ({ children }) => {
  const { darkMode } = useContext(DarkLightThemeContext);

  return (
    <main className={`${styles.main} ${darkMode ? styles.mainDark : styles.mainLight}`}>
      {children}
    </main>
  );
};

export default SecondaryPagesLayout;
