import * as React from 'react';
import { ThemeContext } from 'app/providers/theme-provider/duck';
import { THEME_STORAGE_NAME } from 'constants/localStorage';

const useChangeTheme = () => {
  const { themeName, setThemeName } = React.useContext(ThemeContext);
  React.useEffect(
    () => localStorage.setItem(THEME_STORAGE_NAME, themeName),
    [themeName],
  );

  return [themeName, setThemeName];
};

export default useChangeTheme;
