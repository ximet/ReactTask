import './LocationWeather.css';
import React, { Component, PureComponent } from 'react';
import {
  API_AUTH_PASS,
  API_AUTH_USERNAME,
  API_FORECAST_DETAILED,
  API_FORECAST_DETAILED_PERIODS,
  API_FORECAST_DAILY,
  API_KIEV_ID
} from '../../constants/constants';
import { weatherAPI } from '../../services/dataService';
import LocationWeatherCurrent from './LocationWeatherCurrent/LocationWeatherCurrent';
import LocationWeatherDailyList from './LocationWeatherDailyList/LocationWeatherDailyList';
import LocationWeatherDetailedList from './LocationWeatherDetailedList/LocationWeatherDetailedList';

class LocationWeather extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentLocationId: API_KIEV_ID,
      currentLocationInfo: null,
      currentLocationWeather: null,
      currentLocationDailyWeather: null,
      currentLocationDetailedWeather: null,
      activeDayDate: null
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
          activeDayDate: new Date(currentLocationWeather.time).setHours(0,0,0,0)         //currentLocationWeather.time.split('T')[0]
        });
        console.log('activeDayDate:', new Date(currentLocationWeather.time).setHours(0,0,0,0))



        const currentLocationInfo = await weatherAPI.getLocationInfo(API_KIEV_ID);
        this.setState({ currentLocationInfo });
        const currentLocationDailyWeather = await weatherAPI.getForecast(
          API_FORECAST_DAILY,
          API_KIEV_ID
        );
        this.setState({ currentLocationDailyWeather });
        const currentLocationDetailedWeather = await weatherAPI.getForecast(
          API_FORECAST_DETAILED,
          API_KIEV_ID,
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
    this.setState({ activeDayDate: new Date(date).setHours(0,0,0,0) });
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
        <LocationWeatherDetailedList
          currentLocationDetailedWeather={this.state.currentLocationDetailedWeather}
          activeDayDate={this.state.activeDayDate}
        />
      </div>
    );
  }
}

export default LocationWeather;
