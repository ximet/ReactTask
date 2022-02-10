import React, { useContext } from 'react';

import { ThemeContext } from '../../core/contexts';

import moonIcon from '../../assets/images/moon.png';
import sunIcon from '../../assets/images/sun.png';

import './ThemeSwitcher.scss';

function SwitcherTheme() {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleClick = () => changeTheme();

  return (
    <div className="switcher" onClick={handleClick} role="button" tabIndex={0}>
      <img
        className="switcher-icon"
        src={theme === 'light' ? moonIcon : sunIcon}
        alt="theme"
        style={{ width: '40px' }}
      />
    </div>
  );
}

export default SwitcherTheme;
