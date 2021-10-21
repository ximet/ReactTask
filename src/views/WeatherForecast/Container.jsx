import React from 'react';

import { connect } from 'react-redux';
import { CURRENT_CITY_ID } from '../../constants/forecaApi';
import { getWeatherInfo } from '../../redux/actions/weatherActions';

import WeatherForecast from './WeatherForecast';

class WeatherForecastContainer extends React.Component {
  componentDidMount() {
    this.props.getWeatherInfo(CURRENT_CITY_ID);
  }

  render() {
    if (this.props.isFetching) {
      return <span> Loading...</span>;
    }

    if (this.props.errorMessage) {
      return <span> {this.props.errorMessage}</span>;
    }

    return <WeatherForecast />;
  }
}

const mapStateToProps = state => ({
  isFetching: state.weather.isFetching,
  errorMessage: state.weather.errorMessage,
  dailyCityForecast: state.weather.dailyCityForecast,
  cityInfo: state.location.currentLocation
});

const mapDispatchToProps = dispatch => {
  return {
    getWeatherInfo: location => dispatch(getWeatherInfo(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecastContainer);
