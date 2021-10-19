import PropTypes, { number, string } from 'prop-types';

export const CurrentCityForecastLocationTypes = PropTypes.shape({
  name: string.isRequired
});

export const CurrentCityForecastWeatherTypes = PropTypes.shape({
  temperature: number.isRequired,
  symbolPhrase: string.isRequired
});
