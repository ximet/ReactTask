import React from 'react';

import { connect } from 'react-redux';
import { CURRENT_CITY_ID, FETCHING_ERROR_TEXT } from '../../constants/forecaApi';
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

const mapDispatchToProps = dispatch => {
  return {
    getWeatherInfo: location => dispatch(getWeatherInfo(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecastContainer);
