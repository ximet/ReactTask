import StorageService from '../services/StorageConnectionService';
import { THEME_STORAGE_CODE } from '../utils/constants';

export const themeConfig = {
  defaultActive: 'light_theme',
  themeMap: {
    light_theme: {
      name: 'Light',
      code: 'light_theme'
    },
    dark_theme: {
      name: 'Dark',
      code: 'dark_theme'
    }
  }
};

export function getThemesList() {
  const themeList = themeConfig.themeMap;
  const themesKeys = Object.keys(themeList);

  return themesKeys.map(themeKey => themeList[themeKey]);
}

export function getDefaultTheme() {
  const savedTheme = StorageService.getValue(THEME_STORAGE_CODE);
  const defaultThemeKey = themeConfig.defaultActive;

  return savedTheme ? savedTheme : themeConfig.themeMap[defaultThemeKey];
}
