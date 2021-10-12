import './LocationWeather.css';
import React, { Component, PureComponent } from 'react';
import {
  API_AUTH_PASS,
  API_AUTH_USERNAME,
  API_FORECAST_DETAILED_PERIODS,
  API_DEFAULT_ID,
  API_FORECAST_DAILY_ENDPOINT,
  API_FORECAST_DETAILED_ENDPOINT
} from '../../constants/constants';
import { weatherAPI } from '../../services/dataService';
import LocationWeatherCurrentInfo from './LocationWeatherCurrentInfo/LocationWeatherCurrentInfo';
import LocationWeatherDailyList from './LocationWeatherDailyList/LocationWeatherDailyList';
import LocationWeatherDetailedList from './LocationWeatherDetailedList/LocationWeatherDetailedList';

class LocationWeather extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      defaultLocationId: API_DEFAULT_ID,
      currentLocationInfo: null,
      currentLocationWeather: null,
      currentLocationDailyWeather: null,
      currentLocationDetailedWeather: null,
      activeDayDate: 0
    };

    this.setActiveDayDate = this.setActiveDayDate.bind(this);
  }

  componentDidMount() {
    (async () => {
      try {
        let geoPosition = null;
        navigator.geolocation.getCurrentPosition(
          position => {
            geoPosition = position;
          },
          error => {
            console.log('Could not get geo position from browser', error);
          }
        );

        await weatherAPI.getToken(API_AUTH_USERNAME, API_AUTH_PASS);

        const currentLocationInfo = await weatherAPI.getLocationInfo(
          geoPosition
            ? `${geoPosition.coords.longitude},${geoPosition.coords.latitude}`
            : this.state.defaultLocationId
        );
        this.setState({ currentLocationInfo });

        const currentLocationWeather = await weatherAPI.getCurrentWeather(
          this.state.currentLocationInfo.id
        );
        this.setState({
          currentLocationWeather,
          activeDayDate: new Date(currentLocationWeather.time).setHours(0, 0, 0, 0)
        });

        const currentLocationDailyWeather = await weatherAPI.getForecast(
          API_FORECAST_DAILY_ENDPOINT,
          this.state.currentLocationInfo.id
        );
        this.setState({ currentLocationDailyWeather });

        const currentLocationDetailedWeather = await weatherAPI.getForecast(
          API_FORECAST_DETAILED_ENDPOINT,
          this.state.currentLocationInfo.id,
          { periods: API_FORECAST_DETAILED_PERIODS }
        );
        this.setState({ currentLocationDetailedWeather });
        console.log(currentLocationDetailedWeather);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  setActiveDayDate(date) {
    this.setState({ activeDayDate: new Date(date).setHours(0, 0, 0, 0) });
  }

  render() {
    return (
      <div className="location-weather">
        <LocationWeatherCurrentInfo
          currentLocationWeather={this.state.currentLocationWeather}
          currentLocationInfo={this.state.currentLocationInfo}
        />
        <LocationWeatherDailyList
          currentLocationDailyWeather={this.state.currentLocationDailyWeather}
          activeDayDate={this.state.activeDayDate}
          setActiveDayDate={this.setActiveDayDate}
        />
        <LocationWeatherDetailedList
          currentLocationDetailedWeather={this.state.currentLocationDetailedWeather}
          activeDayDate={this.state.activeDayDate}
        />
      </div>
    );
  }
}

export default LocationWeather;
