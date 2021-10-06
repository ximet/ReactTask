import * as React from 'react';
import { useTranslation } from 'hooks';
import { ThemeContext } from 'app/providers/theme-provider/duck';
import { Switcher, SwitcherProps } from 'components';

const ThemeSwitcher: React.FC<
  Omit<SwitcherProps, 'label' | 'checked' | 'onChange'>
> = (props) => {
  const { themeName, setThemeName } = React.useContext(ThemeContext);
  const { t } = useTranslation('common');

  const toggleTheme = () =>
    setThemeName((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <Switcher
      {...props}
      label={t('dark_theme')}
      checked={themeName === 'dark'}
      onChange={toggleTheme}
    />
  );
};

export default ThemeSwitcher;
