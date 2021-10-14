import { connect } from 'react-redux';
import App from './App';
import { getLocationAction } from './redux/actions/locationAction';
import { getWeatherAction } from './redux/actions/currentWeatherActions';
import { getHourlyWeatherAction } from './redux/actions/hourlyWeatherAction';
import { getDailyWeatherAction } from './redux/actions/dailyWeatherActions';
import { initializeApp } from './redux/actions/appInitializationAction';

const mapStateToProps = (state, ownProps) => ({
  location: state.location.location
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initializeApp: () => dispatch(initializeApp)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
