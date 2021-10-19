import PropTypes, { number, string } from 'prop-types';

export const DailyForecastsDailyForecastsTypes = PropTypes.arrayOf(
  PropTypes.shape({
    date: string.isRequired,
    symbolPhrase: string.isRequired,
    maxTemp: number.isRequired
  })
);
