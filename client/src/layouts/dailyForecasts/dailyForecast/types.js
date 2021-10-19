import PropTypes, { string, number } from 'prop-types';

export const DailyForecastForecastTypes = PropTypes.shape({
  date: string.isRequired,
  maxTemp: number.isRequired,
  symbolPhrase: string.isRequired
});
