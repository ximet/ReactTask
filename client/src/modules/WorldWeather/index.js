import { mapStateToProps, WorldWeather } from './containers/WorldWeather';
import { connect } from 'react-redux';
import * as actions from './actions';

export default connect(mapStateToProps, actions)(WorldWeather);
