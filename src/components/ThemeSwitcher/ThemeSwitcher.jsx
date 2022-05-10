import React, { useContext } from 'react';
import { DarkModeContext } from '../../contexts/darkMode';
import { translations } from '../../utils/translations';
import { Storage } from '../../services/localStorage';
import * as S from './ThemeSwitcher.styles';

const ThemeSwitcher = () => {
  const darkModeContext = useContext(DarkModeContext);
  const { isDarkMode, setIsDarkMode } = darkModeContext;

  const themeChange = () => {
    setIsDarkMode(!isDarkMode);
    Storage.setTheme(!isDarkMode);
  };

  return (
    <S.ButtonWrapper>
      <S.Button onClick={themeChange}>
        {isDarkMode ? translations.msg_light : translations.msg_dark}
      </S.Button>
    </S.ButtonWrapper>
  );
};

export default ThemeSwitcher;
