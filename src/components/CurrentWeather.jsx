import PropTypes from 'prop-types';

const CurrentWeather = ({ currentSearch, currentTemp }) => (
  <p>{`The current weather in ${currentSearch} is ${currentTemp} C.`}</p>
);

CurrentWeather.propTypes = {
  currentSearch: PropTypes.string.isRequired,
  currentTemp: PropTypes.string.isRequired
};

export default CurrentWeather;
