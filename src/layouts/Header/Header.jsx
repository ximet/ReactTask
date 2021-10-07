import React from 'react';
import styles from './Header.module.scss';

import NavBar from './NavBar/Navbar';
import SearchInput from '../../components/SearchInput/SearchInput';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

function Header({ theme, onSwitchTheme }) {
  return (
    <div className={styles.header}>
      <NavBar />
      <div className={styles.wrapper}>
        <SearchInput />
        <ThemeSwitcher theme={theme} onSwitchTheme={onSwitchTheme} />
      </div>
    </div>
  );
}

export default Header;
