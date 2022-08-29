import React, { FunctionComponent } from 'react';

// Custom hooks
import { useAppSelector, useAppDispatch } from '../../../app/hooks';

// Store actions
import { toggleTheme } from '../../../features/theme/themeSlice';

// Styles
import * as S from './styles';

// Assets
import { IconLightMode, IconDarkMode } from '../../assets/images/svg';

const ThemeSwitch: FunctionComponent = () => {
  const { theme } = useAppSelector(state => state.theme);

  const dispatch = useAppDispatch();

  return (
    <S.ThemeSwitch
      theme={theme}
      onClick={() => dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'))}
    >
      <IconLightMode />
      <IconDarkMode />
    </S.ThemeSwitch>
  );
};

export default ThemeSwitch;
