import React from 'react';
import classes from './themeSwitcher.module.css';
import darkModeBtn from '../../../public/images/darkModeBtn.png';
import lightModeBtn from '../../../public/images/lightModeBtn.png';

function ThemeSwitcher({ theme, themeToggle }) {

  const themeBtnImg = theme == 'light' ? darkModeBtn : lightModeBtn;

  return (
    <div className={classes.container}>
      <div className={classes.themeBtn} onClick={themeToggle}>
        <img src={themeBtnImg}></img>
      </div>
      <span className={classes.themeText} data-theme={theme}>{theme}</span>
    </div>
  );
}

export default ThemeSwitcher;
