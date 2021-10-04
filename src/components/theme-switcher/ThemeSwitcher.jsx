import * as React from 'react';
import { useTranslation } from 'hooks';
import { LIGHT, DARK } from 'constants/theme';
import { ThemeContext } from 'app/providers/theme-provider/duck';
import { Switcher } from 'components';

const ThemeSwitcher = () => {
  const { themeName, setThemeName } = React.useContext(ThemeContext);
  const { t } = useTranslation('common');

  const toggleTheme = () =>
    setThemeName((prevTheme) => (prevTheme === LIGHT ? DARK : LIGHT));

  return (
    <Switcher
      label={t('dark_theme')}
      checked={themeName === DARK}
      onChange={toggleTheme}
    />
  );
};

export default ThemeSwitcher;
