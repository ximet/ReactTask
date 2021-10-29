import { createSelector } from 'reselect';

export const getWeather = state => state.currentWeather;

export const selectCurrentCityForecast = createSelector(
  [getWeather],
  ({ temperature, symbolPhrase }) => ({
    temperature,
    symbolPhrase
  })
);
