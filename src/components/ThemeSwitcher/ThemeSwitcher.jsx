import React, { useContext } from 'react';

import { ThemeContext } from '../../core/contexts';

import moonIcon from '../../assets/images/moon.png';
import sunIcon from '../../assets/images/sun.png';

import './ThemeSwitcher.scss';

function SwitcherTheme() {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleClick = () => changeTheme();

  return (
    <button className="switcher" onClick={handleClick} type="button">
      <img
        className="switcher-icon"
        src={theme === 'light' ? moonIcon : sunIcon}
        alt="theme"
        style={{ width: '40px' }}
      />
    </button>
  );
}

export default SwitcherTheme;
