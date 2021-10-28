import { createSelector } from 'reselect';
import { getFormattedHourlyData } from '../../utils/hourlyChartSettings';
import { getCurrentTimeZone } from './locationSelectors';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

const gethourlyCityForecast = state => state.weather.hourlyCityForecast;
const getDailyForecast = state => state.weather.dailyCityForecast;
const getCityForecast = state => state.weather.cityForecast;
export const getTemperatureUnit = state => state.weather.temperatureUnit;

export const selectHourlyChartData = createSelector(
  [gethourlyCityForecast, getTemperatureUnit, getCurrentTimeZone],
  (forecast, unit, timezone) => getFormattedHourlyData(forecast, unit, timezone)
);

export const selectShortCityForecast = createSelector(
  [getCityForecast],
  ({ relHumidity, symbol, symbolPhrase, temperature, windSpeed }) => ({
    relHumidity,
    symbol,
    symbolPhrase,
    temperature,
    windSpeed
  })
);

export const selectDailyForecastCards = createSelector(
  [getDailyForecast, getTemperatureUnit],
  (dailyForecast, unit) => {
    return dailyForecast.map(forecast => <WeatherCard weatherInfo={forecast} unit={unit} />);
  }
);
