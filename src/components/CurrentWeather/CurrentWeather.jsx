import PropTypes from 'prop-types';

import useFetch from '../../customHooks/useFetch';

const CurrentWeather = ({ cityId, cityName, current, isLoading, getCurrentWeatherData }) => {
  useFetch(getCurrentWeatherData, cityId);

  const weatherDescription =
    current?.temperature && current?.symbolPhrase
      ? // ex. 13°C and clear
        `${current.temperature}°C and ${current.symbolPhrase}`
      : 'unavailable';

  return !isLoading ? (
    <p>{`The current weather in ${cityName} is ${weatherDescription}.`}</p>
  ) : (
    <p>Fetching the data for you...</p>
  );
};

CurrentWeather.propTypes = {
  cityId: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  current: PropTypes.shape({
    temperature: PropTypes.number,
    symbolPhrase: PropTypes.string
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  getCurrentWeatherData: PropTypes.func.isRequired
};

export default CurrentWeather;
