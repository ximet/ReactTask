import './LocationWeather.css';
import React, { Component, PureComponent } from 'react';
import { API_AUTH_PASS, API_AUTH_USERNAME, API_KIEV_ID } from '../../constants/constants';
import { weatherAPI } from '../../services/dataService';
import LocationWeatherCurrent from './LocationWeatherCurrent/LocationWeatherCurrent';

class LocationWeather extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentLocationId: API_KIEV_ID,
      currentLocationInfo: null,
      currentLocationWeather: null
    };
  }

  componentDidMount() {
    (async () => {
      try {
        await weatherAPI.getToken(API_AUTH_USERNAME, API_AUTH_PASS);
        const currentLocationWeather = await weatherAPI.getCurrentWeather(API_KIEV_ID); 
        this.setState({currentLocationWeather});
        console.log(currentLocationWeather);   
        const currentLocationInfo = await weatherAPI.getLocationInfo(API_KIEV_ID);    
        this.setState({currentLocationInfo});
        console.log(currentLocationInfo);    
      } catch (error) {
        console.log(error);
      }
    })();
  }

  render() {
    return (
      <div className="location-weather">
        <LocationWeatherCurrent
          currentLocationWeather={this.state.currentLocationWeather}
          currentLocationInfo={this.state.currentLocationInfo}
        />
      </div>
    );
  }
}

export default LocationWeather;
