import React from 'react';
import classes from './themeSwitcher.module.css';
import darkModeBtnImg from '../../../public/images/darkModeBtn.png';
import lightModeBtnImg from '../../../public/images/lightModeBtn.png';
import { themes } from '../../globalConsts';
import PropTypes from 'prop-types';

function ThemeSwitcher({ theme, themeToggle }) {
  const themeBtnImg = theme == themes.light ? darkModeBtnImg : lightModeBtnImg;

  return (
    <div className={classes.container}>
      <div className={classes.themeBtn} onClick={themeToggle}>
        <img src={themeBtnImg} alt="theme-img" />
      </div>
      <span className={classes.themeText} data-theme={theme}>
        {theme}
      </span>
    </div>
  );
}

ThemeSwitcher.propTypes = {
  theme: PropTypes.string.isRequired,
  themeToggle: PropTypes.func.isRequired
};

export default ThemeSwitcher;
