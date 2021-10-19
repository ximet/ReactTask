import PropTypes, { string, number } from 'prop-types';

export const hourlyForecastsHourlyForecastsTypes = PropTypes.arrayOf(
  PropTypes.shape({
    time: string.isRequired,
    temperature: number.isRequired,
    windSpeed: number.isRequired,
    relHumidity: number.isRequired
  })
);
