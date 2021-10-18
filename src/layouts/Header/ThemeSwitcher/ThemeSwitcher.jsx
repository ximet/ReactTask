import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './ThemeSwitcher.module.scss';
import { THEMES } from '../../../constants/themes';
import { darkIcon } from '../../../assets/svg/dark-theme-icon.js';
import { lightIcon } from '../../../assets/svg/light-theme-icon.js';
import { setCurrentTheme } from '../../../redux/actions/themeActions';

function ThemeSwitcher({ theme, switchTheme }) {
  function onSwitch() {
    const currentTheme = theme === THEMES.light ? THEMES.dark : THEMES.light;

    switchTheme(currentTheme);
  }

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

const mapStateToProps = state => ({
  theme: state.theme.currentTheme
});

const mapDispatchToProps = dispatch => {
  return {
    switchTheme: theme => dispatch(setCurrentTheme(theme))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
