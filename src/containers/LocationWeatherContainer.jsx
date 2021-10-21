import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LocationWeather from '../components/LocationWeather/LocationWeather';
import {
  CurrentLocationDailyWeatherType,
  CurrentLocationDetailedWeatherType,
  CurrentLocationInfoType,
  CurrentLocationWeatherType
} from '../types/types';
import { getCurrentLocationData, getLocationDataById } from '../actions/CurrentLocationActions';
import { putSelectedLocation } from '../actions/SelectedLocationsActions';
import { connect } from 'react-redux';
import Preloader from '../components/Preloader/Preloader';
import { WEATHER_UPDATE_INTERVAL } from '../constants/constants';
import { isReadyForDataFetchingSelector } from '../selectors';
import { withRouter } from 'react-router';

class LocationWeatherContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.timerId = null;
  }

  actualizeData() {
    if (this.props.match && this.props.match.params.id) {
      this.props.getLocationDataById(this.props.match.params.id);
    } else {
      this.props.getCurrentLocationData();
    }
  }

  componentDidMount() {
    // get data first time
    this.actualizeData();

    // auto refresh
    this.timerId = setInterval(() => {
      this.actualizeData();
    }, WEATHER_UPDATE_INTERVAL);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.actualizeData();
    }
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
        addToSelectedLocations={this.props.putSelectedLocation}
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
  getCurrentLocationData: PropTypes.func.isRequired,
  getLocationDataById: PropTypes.func.isRequired,
  putSelectedLocation: PropTypes.func.isRequired
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
  getCurrentLocationData,
  getLocationDataById,
  putSelectedLocation
})(withRouter(LocationWeatherContainer));
