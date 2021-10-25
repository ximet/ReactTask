import './LocationWeather.css';
import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import LocationWeatherCurrentInfo from './LocationWeatherCurrentInfo/LocationWeatherCurrentInfo';
import LocationWeatherDailyList from './LocationWeatherDailyList/LocationWeatherDailyList';
import LocationWeatherDetailedList from './LocationWeatherDetailedList/LocationWeatherDetailedList';
import {
  CurrentLocationDailyWeatherType,
  CurrentLocationDetailedWeatherType,
  CurrentLocationInfoType,
  CurrentLocationWeatherType
} from '../../types/types';

class LocationWeather extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeDayDate: new Date().setHours(0, 0, 0, 0)
    };

    this.setActiveDayDate = this.setActiveDayDate.bind(this);
  }

  setActiveDayDate(date) {
    this.setState({ activeDayDate: new Date(date).setHours(0, 0, 0, 0) });
  }

  render() {
    return (
      <div className="location-weather">
        <LocationWeatherCurrentInfo
          currentLocationWeather={this.props.currentLocationWeather}
          currentLocationInfo={this.props.currentLocationInfo}
          addToSelectedLocations={this.props.addToSelectedLocations}
        />
        <LocationWeatherDailyList
          currentLocationDailyWeather={this.props.currentLocationDailyWeather}
          activeDayDate={this.state.activeDayDate}
          setActiveDayDate={this.setActiveDayDate}
        />
        <LocationWeatherDetailedList
          currentLocationDetailedWeather={this.props.currentLocationDetailedWeather}
          activeDayDate={this.state.activeDayDate}
        />
      </div>
    );
  }
}

LocationWeather.propTypes = {
  currentLocationInfo: CurrentLocationInfoType,
  currentLocationWeather: CurrentLocationWeatherType,
  currentLocationDailyWeather: CurrentLocationDailyWeatherType,
  currentLocationDetailedWeather: CurrentLocationDetailedWeatherType,
  addToSelectedLocations: PropTypes.func.isRequired
};

LocationWeather.defaultProps = {
  currentLocationInfo: null,
  currentLocationWeather: null,
  currentLocationDailyWeather: null,
  currentLocationDetailedWeather: null
};

export default LocationWeather;
