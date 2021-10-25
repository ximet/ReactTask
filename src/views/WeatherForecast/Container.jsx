import React from 'react';

import { connect } from 'react-redux';
import { FETCHING_ERROR_TEXT } from '../../constants/forecaApi';

import WeatherForecast from './WeatherForecast';

class WeatherForecastContainer extends React.Component {
  render() {
    if (this.props.isFetching) {
      return <span> Loading...</span>;
    }

    if (this.props.error) {
      return (
        <div>
          <p>{this.props.error.message}.</p>
          <p>{FETCHING_ERROR_TEXT}</p>
        </div>
      );
    }

    return <WeatherForecast />;
  }
}

const mapStateToProps = state => ({
  isFetching: state.weather.isFetching,
  error: state.weather.error,
  dailyCityForecast: state.weather.dailyCityForecast,
  cityInfo: state.location.currentLocation
});

export default connect(mapStateToProps)(WeatherForecastContainer);
