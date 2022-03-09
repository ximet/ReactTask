import React from 'react';
import classes from './ThemeSwitcher.module.css';
import sun from '../../../public/icons/sun.png';
import moon from '../../../public/icons/moon.png';
import { THEME } from '../../helpers/toggleTheme';

function ThemeSwitcher({ theme, onToggleTheme }) {
  return (
    <div className={classes.theme_switcher} data-theme={theme}>
      <button className={classes.theme_button} type="button" onClick={onToggleTheme}>
        <img src={theme === THEME.light ? sun : moon} alt="theme-switcher" data-theme={theme} />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
