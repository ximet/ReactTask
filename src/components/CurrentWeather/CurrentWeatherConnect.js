import { connect } from 'react-redux';

import CurrentWeather from './CurrentWeather';
import { getCurrentWeatherData } from '../../redux/actions/currentWeather';

const mapStateToProps = state => {
  const {
    current: { current, isLoading }
  } = state;
  return { current, isLoading };
};

const mapDispatchToProps = dispatch => ({
  getCurrentWeatherData: value => dispatch(getCurrentWeatherData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
