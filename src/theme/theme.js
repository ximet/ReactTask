import {
  aTextColorDarkTheme,
  aTextColorLightTheme,
  textColorDarkTheme,
  textColorLightTheme,
  toggleBorderDark,
  toggleBorderLight
} from '../common/cssVariables';

export const lightTheme = {
  isLight: true,
  text: textColorLightTheme,
  toggleBorder: toggleBorderLight,
  a: aTextColorLightTheme
};

export const darkTheme = {
  isLight: false,
  text: textColorDarkTheme,
  toggleBorder: toggleBorderDark,
  a: aTextColorDarkTheme
};
