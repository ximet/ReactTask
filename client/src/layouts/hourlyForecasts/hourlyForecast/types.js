import PropTypes from 'prop-types';

export const forecastType = PropTypes.shape({
  time: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  relHumidity: PropTypes.number.isRequired
});
