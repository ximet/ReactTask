import PropTypes from 'prop-types';

import useAPIRequest from './CustomHooks/useAPIRequest';
import { REQUEST_TYPES } from '../common/constants';

const CurrentWeather = ({ cityId, cityName }) => {
  const { current } = useAPIRequest(REQUEST_TYPES.current, cityId);

  return current ? (
    <p>{`The current weather in ${cityName} is ${current.temperature} C.`}</p>
  ) : (
    <p>Fetching you data...</p>
  );
};

CurrentWeather.propTypes = {
  cityId: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired
};

export default CurrentWeather;
