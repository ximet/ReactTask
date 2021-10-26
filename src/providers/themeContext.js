import * as React from 'react';
import { themeConfig } from '../config/themeConfig';

const defaultThemeKey = themeConfig.defaultActive;
const themesMap = themeConfig.themeMap;
const defaultThemeData = themesMap[defaultThemeKey];

export default React.createContext({
  theme: defaultThemeData,
  selectTheme: () => {}
});
