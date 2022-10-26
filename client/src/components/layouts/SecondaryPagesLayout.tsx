import DarkLightThemeContext from 'contexts/ThemeContext';
import React, { FC, ReactNode, useContext } from 'react';
import styles from './SecondaryPagesLayout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const SecondaryPagesLayout: FC<LayoutProps> = ({ children }) => {
  const { darkMode } = useContext(DarkLightThemeContext);

  return (
    <main
      className={`${styles.main} ${darkMode ? styles.mainDark : styles.mainLight}`}
      data-testid="layout"
    >
      {children}
    </main>
  );
};

export default SecondaryPagesLayout;
