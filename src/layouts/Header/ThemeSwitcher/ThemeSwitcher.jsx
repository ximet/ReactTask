import React from 'react';
import PropTypes from 'prop-types';

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

ThemeSwitcher.propTypes = {
  theme: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
};

export default ThemeSwitcher;
