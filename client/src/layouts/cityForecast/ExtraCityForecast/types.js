import PropTypes from 'prop-types';

export const weatherType = PropTypes.shape({
  windSpeed: PropTypes.number.isRequired,
  relHumidity: PropTypes.number.isRequired,
  feelsLikeTemp: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired
});
