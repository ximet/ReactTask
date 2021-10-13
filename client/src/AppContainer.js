import { connect } from 'react-redux';
import App from './App';
import { getLocationAction } from './redux/actions/locationAction';
import { getWeatherAction } from './redux/actions/currentWeatherActions';
import { getHourlyWeatherAction } from './redux/actions/hourlyWeatherAction';
import { getDailyWeatherAction } from './redux/actions/dailyWeatherActions';

const mapStateToProps = (state, ownProps) => ({
  location: state.location.location
});

const getWeather = (id, dispatch) => {
  dispatch(getWeatherAction(id));
  dispatch(getHourlyWeatherAction(id));
  dispatch(getDailyWeatherAction(id));
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getLocation: location => dispatch(getLocationAction(location)),
    getWeather: id => getWeather(id, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
