import React, { Component, PureComponent } from 'react';
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

class LocationWeatherContainer extends PureComponent {
  componentDidMount() {
    if (!this.props.isDataFetchnig) {
      this.props.getCurrentLocationData();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      !this.props.isDataFetchnig &&
      !this.props.currentLocationInfo &&
      !prevProps.currentLocationInfo &&
      !this.props.currentLocationWeather &&
      !prevProps.currentLocationWeather &&
      !this.props.currentLocationDailyWeather &&
      !prevProps.currentLocationDailyWeather &&
      !this.props.currentLocationDetailedWeather &&
      !prevProps.currentLocationDetailedWeather
    ) {
      this.props.getCurrentLocationData();
    }
  }

  render() {
    if (this.props.isDataFetchnig) {
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
    currentLocationInfo: state.currentLocation.info,
    currentLocationWeather: state.currentLocation.weather,
    currentLocationDailyWeather: state.currentLocation.dailyWeather,
    currentLocationDetailedWeather: state.currentLocation.detailedWeather
  };
};

export default connect(mapStateToProps, {
  getCurrentLocationData
})(LocationWeatherContainer);
