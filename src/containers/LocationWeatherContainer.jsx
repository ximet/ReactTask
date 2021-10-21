import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LocationWeather from '../components/LocationWeather/LocationWeather';
import {
  CurrentLocationDailyWeatherType,
  CurrentLocationDetailedWeatherType,
  CurrentLocationInfoType,
  CurrentLocationWeatherType
} from '../types/types';
import { getCurrentLocationData } from '../actions/CurrentLocationActions';
import { connect } from 'react-redux';
import Preloader from '../components/Preloader/Preloader';
import { WEATHER_UPDATE_INTERVAL } from '../constants/constants';
import { isReadyForDataFetchingSelector } from '../selectors';

class LocationWeatherContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.timerId = null;
  }

  componentDidMount() {
    // get data first time
    this.props.getCurrentLocationData();

    // auto refresh
    this.timerId = setInterval(() => {
      this.props.getCurrentLocationData();
    }, WEATHER_UPDATE_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    if (!this.props.isReadyForDataFetching) {
      return (
        <div className="location-weather">
          <Preloader />
        </div>
      );
    }

    return (
      <LocationWeather
        currentLocationInfo={this.props.currentLocationInfo}
        currentLocationWeather={this.props.currentLocationWeather}
        currentLocationDailyWeather={this.props.currentLocationDailyWeather}
        currentLocationDetailedWeather={this.props.currentLocationDetailedWeather}
        getCurrentLocationData={this.props.getCurrentLocationData}
      />
    );
  }
}

LocationWeatherContainer.propTypes = {
  isReadyForDataFetching: PropTypes.bool.isRequired,
  currentLocationInfo: CurrentLocationInfoType,
  currentLocationWeather: CurrentLocationWeatherType,
  currentLocationDailyWeather: CurrentLocationDailyWeatherType,
  currentLocationDetailedWeather: CurrentLocationDetailedWeatherType,
  getCurrentLocationData: PropTypes.func.isRequired
};

LocationWeatherContainer.defaultProps = {
  currentLocationInfo: null,
  currentLocationWeather: null,
  currentLocationDailyWeather: null,
  currentLocationDetailedWeather: null
};

const mapStateToProps = state => {
  return {
    isReadyForDataFetching: isReadyForDataFetchingSelector(state),
    currentLocationInfo: state.currentLocation.info,
    currentLocationWeather: state.currentLocation.weather,
    currentLocationDailyWeather: state.currentLocation.dailyWeather,
    currentLocationDetailedWeather: state.currentLocation.detailedWeather
  };
};

export default connect(mapStateToProps, {
  getCurrentLocationData
})(LocationWeatherContainer);
