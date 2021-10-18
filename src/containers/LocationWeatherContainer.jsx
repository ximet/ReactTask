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
import { WEATHER_FIRST_UPDATE_INTERVAL, WEATHER_UPDATE_INTERVAL } from '../constants/constants';

class LocationWeatherContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.timerId = null;
  }

  componentDidMount() {
    // wait for ability to get data first time
    const internalTimer = setInterval(() => {
      if (this.props.isTokenReceived && !this.props.isDataFetchnig) {
        this.props.getCurrentLocationData();
        clearInterval(internalTimer);
      }
    }, WEATHER_FIRST_UPDATE_INTERVAL);

    // auto refresh
    this.timerId = setInterval(() => {
      if (this.props.isTokenReceived && !this.props.isDataFetchnig) {
        this.props.getCurrentLocationData();
      }
    }, WEATHER_UPDATE_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    if (this.props.isDataFetchnig || !this.props.isTokenReceived) {
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
  isDataFetchnig: PropTypes.bool.isRequired,
  isTokenReceived: PropTypes.bool.isRequired,
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
    isDataFetchnig: state.serverApi.isFetchingInProgress,
    isTokenReceived: state.serverApi.isTokenReceived,
    currentLocationInfo: state.currentLocation.info,
    currentLocationWeather: state.currentLocation.weather,
    currentLocationDailyWeather: state.currentLocation.dailyWeather,
    currentLocationDetailedWeather: state.currentLocation.detailedWeather
  };
};

export default connect(mapStateToProps, {
  getCurrentLocationData
})(LocationWeatherContainer);
