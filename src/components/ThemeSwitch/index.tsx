import React, { FunctionComponent } from 'react';

// Styles
import * as S from './styles';

// Assets
import { IconLightMode, IconDarkMode } from '../../assets/images/svg';

const ThemeSwitch: FunctionComponent = () => {
  return (
    <S.ThemeSwitch>
      <IconLightMode />
      <IconDarkMode />
    </S.ThemeSwitch>
  );
};

export default ThemeSwitch;
