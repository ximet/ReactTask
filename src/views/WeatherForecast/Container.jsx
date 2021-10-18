import React from 'react';

import { connect } from 'react-redux';
import { CURRENT_CITY_ID } from '../../constants/forecaApi';
import { getWeatherInfo } from '../../redux/actions/weatherActions';

import WeatherForecast from './WeatherForecast';

class WeatherForecastContainer extends React.PureComponent {
  componentDidMount() {
    this.props.getWeatherInfo(CURRENT_CITY_ID);
  }

  render() {
    if (this.props.isFetching) {
      return <span> Loading...</span>;
    }

    if (this.props.isFetchingFailure) {
      return <span> Something went wrong...</span>;
    }

    return (
      <WeatherForecast
        dailyCityForecast={this.props.dailyCityForecast}
        hourlyCityForecast={this.props.hourlyCityForecast}
        cityInfo={this.props.cityInfo}
        theme={this.props.theme}
      />
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.weather.isFetching,
  isFetchingFailure: state.weather.isFetchingFailure,
  dailyCityForecast: state.weather.dailyCityForecast,
  hourlyCityForecast: state.weather.hourlyCityForecast,
  cityInfo: state.location.currentLocation
});

const mapDispatchToProps = dispatch => {
  return {
    getWeatherInfo: location => dispatch(getWeatherInfo(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecastContainer);
