import PropTypes from 'prop-types';

import useFetch from './CustomHooks/useFetch';
import { getCurrentWeatherData } from '../services/weatherService';

const CurrentWeather = ({ cityId, cityName }) => {
  const { current } = useFetch(getCurrentWeatherData, cityId);

  const weatherDesctiption =
    current?.temperature && current?.symbolPhrase
      ? // ex. 13°C and clear
        `${current.temperature}°C and ${current.symbolPhrase}`
      : 'unavailable';

  return current ? (
    <p>{`The current weather in ${cityName} is ${weatherDesctiption}.`}</p>
  ) : (
    <p>Fetching you data...</p>
  );
};

CurrentWeather.propTypes = {
  cityId: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired
};

export default CurrentWeather;
