import { connect } from 'react-redux';

import CurrentWeather from './CurrentWeather';

import { getCurrentWeatherData } from '../../redux/actions/currentWeather';
import {
  currentWeatherSelector,
  isCurrentWeatherLoadingSelector
} from '../../redux/selectors/currentWeatherSelectors';

const mapStateToProps = state => ({
  current: currentWeatherSelector(state),
  isLoading: isCurrentWeatherLoadingSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getCurrentWeatherData: value => dispatch(getCurrentWeatherData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
