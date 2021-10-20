import { formatTime } from './dateTimeUtils';

function prepareChartData(hourlyForecast) {
  const hours = [];
  const temperatures = [];

  hourlyForecast.forEach(forecast => {
    hours.push(formatTime(forecast.time));
    temperatures.push(forecast.temperature);
  });

  return [hours, temperatures];
}

function prepareThemesList(themeConfig) {
  const themeList = themeConfig.themeMap;
  const themesKeys = Object.keys(themeList);

  return themesKeys.map(themeKey => themeList[themeKey]);
}

function getDefaultTheme(themeConfig) {
  const defaultThemeKey = themeConfig.defaultActive;

  return themeConfig.themeMap[defaultThemeKey];
}

export { prepareChartData, prepareThemesList, getDefaultTheme };
