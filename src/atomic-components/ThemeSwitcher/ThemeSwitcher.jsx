import React, { useContext } from 'react';
import classes from './ThemeSwitcher.module.css';
import sun from '../../../public/icons/sun.png';
import moon from '../../../public/icons/moon.png';
import { THEME } from '../../helpers/toggleTheme';
import { ThemeContext } from '../../providers/themeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={classes.theme_switcher} data-theme={theme}>
      <button className={classes.theme_button} type="button" onClick={toggleTheme}>
        <img src={theme === THEME.light ? sun : moon} alt="theme-switcher" data-theme={theme} />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
