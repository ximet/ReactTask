import React from 'react';

import styles from './ThemeSwitcher.module.scss';
import { THEMES } from '../../../constants/themes';
import { darkIcon } from '../../../assets/svg/dark-theme-icon.js';
import { lightIcon } from '../../../assets/svg/light-theme-icon.js';

function ThemeSwitcher({ theme, onSwitch }) {
  const lightThemeBtnClasses =
    theme === THEMES.light
      ? [styles.switchThemeBtn, styles.active, styles.lightBtn].join(' ')
      : styles.switchThemeBtn;

  const darkThemeBtnClasses =
    theme === THEMES.dark
      ? [styles.switchThemeBtn, styles.active, styles.darkBtn].join(' ')
      : styles.switchThemeBtn;

  return (
    <div className={styles.themeSwitcher} onClick={onSwitch}>
      <div className={lightThemeBtnClasses}>{lightIcon}</div>
      <div className={darkThemeBtnClasses}>{darkIcon}</div>
    </div>
  );
}

export default ThemeSwitcher;
