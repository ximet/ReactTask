import PropTypes from 'prop-types';

export const dailyForecastsType = PropTypes.arrayOf(
  PropTypes.shape({
    date: PropTypes.string.isRequired,
    symbolPhrase: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired
  })
);
