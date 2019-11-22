export const SET_CURRENT_CITY_WEATHER = 'SET_CURRENT_CITY_WEATHER';
export const SET_CITIES_WEATHER = 'SET_CITIES_WEATHER';

export function setCurrentCityWeather(value) {
  return {
    type: SET_CURRENT_CITY_WEATHER,
    payload: value,
  };
}

export function setCitiesWeather(value) {
  return {
    type: SET_CITIES_WEATHER,
    payload: value,
  };
}
