import { createSelector } from 'reselect';
import { getFormattedHourlyData } from '../../utils/hourlyChartSettings';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

const gethourlyCityForecast = state => state.weather.hourlyCityForecast;
const getDailyForecast = state => state.weather.dailyCityForecast;
export const getCityForecast = state => state.weather.cityForecast;

export const getHourlyChartData = createSelector([gethourlyCityForecast], forecast =>
  getFormattedHourlyData(forecast)
);

export const getShortCityForecast = createSelector(
  [getCityForecast],
  ({ relHumidity, symbol, symbolPhrase, temperature, windSpeed }) => ({
    relHumidity,
    symbol,
    symbolPhrase,
    temperature,
    windSpeed
  })
);

export const getDailyForecastCards = createSelector([getDailyForecast], dailyForecast => {
  return dailyForecast.map(forecast => ({
    id: forecast.date,
    slide: <WeatherCard weatherInfo={forecast} />
  }));
});
