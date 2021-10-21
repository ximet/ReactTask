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
  const defaultThemeKey = themeConfig.defaultActive;

  return themeConfig.themeMap[defaultThemeKey];
}
