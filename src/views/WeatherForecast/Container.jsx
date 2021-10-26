import React from 'react';
import { connect } from 'react-redux';

import WeatherForecast from './WeatherForecast';
import WithPreloader from '../../components/WithPreloader/WithPreloader';
import WithError from '../../components/WithError/WithError';

const mapStateToProps = state => ({
  isFetching: state.weather.isFetching,
  error: state.weather.error
});

export default connect(mapStateToProps)(WithPreloader(WithError(WeatherForecast)));
