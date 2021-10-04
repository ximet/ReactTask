import { useChangeTheme, useTranslation } from 'hooks';
import { LIGHT, DARK } from 'constants/theme';
import { Switcher } from 'components';

const ThemeSwitcher = () => {
  const { t } = useTranslation('common');
  const [themeName, setThemeName] = useChangeTheme();

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
