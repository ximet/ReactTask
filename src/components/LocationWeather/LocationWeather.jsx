import './LocationWeather.css';
import React, { Component, PureComponent } from 'react';
import {
  API_AUTH_PASS,
  API_AUTH_USERNAME,
  API_FORECAST_3_HOURLY,
  API_FORECAST_3_HOURLY_PERIODS,
  API_FORECAST_DAILY,
  API_KIEV_ID
} from '../../constants/constants';
import { weatherAPI } from '../../services/dataService';
import LocationWeatherCurrent from './LocationWeatherCurrent/LocationWeatherCurrent';
import LocationWeatherDailyList from './LocationWeatherDailyList/LocationWeatherDailyList';

class LocationWeather extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentLocationId: API_KIEV_ID,
      currentLocationInfo: null,
      currentLocationWeather: null,
      currentLocationDailyWeather: null,
      currentLocation3HourlyWeather: null,
      activeDayDate: ''
    };

    this.setActiveDayDate = this.setActiveDayDate.bind(this);
  }

  componentDidMount() {
    (async () => {
      try {
        await weatherAPI.getToken(API_AUTH_USERNAME, API_AUTH_PASS);
        const currentLocationWeather = await weatherAPI.getCurrentWeather(API_KIEV_ID);
        this.setState({
          currentLocationWeather,
          activeDayDate: currentLocationWeather.time.split('T')[0]
        });
        const currentLocationInfo = await weatherAPI.getLocationInfo(API_KIEV_ID);
        this.setState({ currentLocationInfo });
        const currentLocationDailyWeather = await weatherAPI.getForecast(
          API_FORECAST_DAILY,
          API_KIEV_ID
        );
        this.setState({ currentLocationDailyWeather });
        const currentLocation3HourlyWeather = await weatherAPI.getForecast(
          API_FORECAST_3_HOURLY,
          API_KIEV_ID,
          API_FORECAST_3_HOURLY_PERIODS
        );
        this.setState({ currentLocation3HourlyWeather });
        console.log(currentLocation3HourlyWeather);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  setActiveDayDate(date) {
    this.setState({ activeDayDate: date });
  }

  render() {
    return (
      <div className="location-weather">
        <LocationWeatherCurrent
          currentLocationWeather={this.state.currentLocationWeather}
          currentLocationInfo={this.state.currentLocationInfo}
        />
        <LocationWeatherDailyList
          currentLocationDailyWeather={this.state.currentLocationDailyWeather}
          activeDayDate={this.state.activeDayDate}
          setActiveDayDate={this.setActiveDayDate}
        />
      </div>
    );
  }
}

export default LocationWeather;
