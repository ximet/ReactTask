import { connect } from 'react-redux';
import Cities from './Cities';
import { setWeatherAction } from '../../../../redux/actions/weatherAction';
import { setLocationAction } from '../../../../redux/actions/locationAction';

// const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => {
  return {
    setWeather: location => setWeatherAction(dispatch, location),
    setLocation: location => dispatch(setLocationAction(location))
  };
};

export default connect(mapDispatchToProps)(Cities);
