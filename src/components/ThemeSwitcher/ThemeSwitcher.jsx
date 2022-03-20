import React, { useContext } from 'react';

import { ThemeSelectorContext } from '../../contexts/themeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeSelectorContext);

  return (
    <>
      <div>{theme}</div>
      <button onClick={toggleTheme}>Change Theme!</button>
    </>
  );
};

export default ThemeSwitcher;
