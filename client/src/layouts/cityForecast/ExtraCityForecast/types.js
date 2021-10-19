import PropTypes, { number } from 'prop-types';

export const ExtraCityForecastWeatherTypes = PropTypes.shape({
  windSpeed: number.isRequired,
  relHumidity: number.isRequired,
  feelsLikeTemp: number.isRequired,
  pressure: number.isRequired
});
