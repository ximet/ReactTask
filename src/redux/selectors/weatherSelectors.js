import { createSelector } from 'reselect';
import { getFormattedHourlyData } from '../../utils/hourlyChartSettings';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

const gethourlyCityForecast = state => state.weather.hourlyCityForecast;
const getDailyForecast = state => state.weather.dailyCityForecast;
export const getCityForecast = state => state.weather.cityForecast;

export const selectHourlyChartData = createSelector([gethourlyCityForecast], forecast =>
  getFormattedHourlyData(forecast)
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

export const selectDailyForecastCards = createSelector([getDailyForecast], dailyForecast => {
  return dailyForecast.map(forecast => <WeatherCard weatherInfo={forecast} />);
});
