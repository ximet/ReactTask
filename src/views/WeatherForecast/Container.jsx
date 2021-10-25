import React from 'react';
import { connect } from 'react-redux';

import WeatherForecast from './WeatherForecast';
import WithPreloader from '../../components/WithPreloader/WithPreloader';
import WithError from '../../components/WithError/WithError';

function WeatherForecastContainer(props) {
  const WeatherForecastWithPreloader = WithPreloader(WeatherForecast);
  const WeatherForecastWithError = WithError(WeatherForecastWithPreloader);

  return (
    <WeatherForecastWithError error={props.error} isPageLoading={props.isFetching} {...props} />
  );
}

const mapStateToProps = state => ({
  isFetching: state.weather.isFetching,
  error: state.weather.error,
  dailyCityForecast: state.weather.dailyCityForecast,
  cityInfo: state.location.currentLocation
});

export default connect(mapStateToProps)(WeatherForecastContainer);
