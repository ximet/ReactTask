import { API_WEATHER_ICON_URL } from '../globalConsts';

export const getWeatherIcon = (weatherCode) => {
  return weatherCode ? `${API_WEATHER_ICON_URL}${weatherCode}.png` : null;
};
