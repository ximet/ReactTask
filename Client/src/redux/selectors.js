import { createSelector } from 'reselect';

export const selectLocalWeather = createSelector(state => state.localWeather)