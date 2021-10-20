import PropTypes from 'prop-types';

export const forecastType = PropTypes.shape({
  date: PropTypes.string.isRequired,
  maxTemp: PropTypes.number.isRequired,
  symbolPhrase: PropTypes.string.isRequired
});
