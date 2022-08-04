import { useState } from 'react';
import { useEffect } from 'react';
import React, { useContext } from 'react';
import axios from 'axios';
import { AuthenticationContext, TemperatureContext } from '../Context';
import Loader from '../components/Loader';

class CurrentLocation extends React.Component {
  static authenticated = AuthenticationContext;
  static temperature = TemperatureContext;

  constructor() {
    super();
    this.state = {
      userLocation: '',
      userCoords: ''
    };
  }

  updateIcon(data) {
    document.getElementById('icon-weather').src =
      'https://developer.foreca.com/static/images/symbols/' + this.state.userLocation.symbol + '.png';
  };

  componentDidMount() {
    const that = this;

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const userCoordinates = {
          latLon: position.coords.longitude + ',' + position.coords.latitude
        };

        (async function getPin() {
          await axios
            .post('http://localhost:3000/get-current-location-params', userCoordinates, {
              headers: { 'Content-Type': 'application/json; charset=UTF-8' }
            })
            .then(data => that.setState({ userCoords: data.data }));
        })();
      });
    } else {
      alert('Location Not Available');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userCoords == '') {
      const that = this;
      (async function () {
        await axios
          .post('http://localhost:3000/get-location-current-weather-by-id', {
            id: that.state.userCoords.id,
            temp: that.temperature
          })
          .then(data => that.setState({ userLocation: data.data }))
          .then(data => that.updateIcon(data))
          .catch(err => {
            console.error('error occured: ', err.message);
          });
      })();
    }
  }

  render() {
    return (
      <>
        {!this.state.userLocation ? (
          <Loader />
        ) : (
          <div className="detailed-page__forecast-content">
            <h2>The weather in {this.state.userCoords.name} currently</h2>
            <div className="forecast-content">
              <div className="forecast-content__temperatute grid-element grid-element--two">
                <div className="temperature__container">
                  <div className="temperature">{this.state.userLocation.temperature}&deg;</div>
                  <div className="temperature__real-feel">
                    Real feel: {this.state.userLocation.feelsLikeTemp}&deg;
                  </div>
                </div>
                <div className="forecast-content__data">
                  <div>Preassure: {this.state.userLocation.pressure} hPa</div>
                  <div>Relative humidity: {this.state.userLocation.relHumidity}&#x25;</div>
                  <div>Cloudiness: {this.state.userLocation.cloudiness}&#x25;</div>
                  <div>Dew point: {this.state.userLocation.dewPoint}&deg;</div>
                  <div>UV: {this.state.userLocation.uvIndex}</div>
                </div>
              </div>
              <div className="forecast-content__icon grid-element grid-element--one">
                <div className="icon-container">
                  <img id="icon-weather" alt="Logo" />
                  <div className="icon-container__text">{this.state.userLocation.symbolPhrase}</div>
                </div>
              </div>
              <div className="forecast-content__wind grid-element grid-element--two">
                <div className="forecast-content__data">
                  <div>Wind speed: {this.state.userLocation.windSpeed}m/s</div>
                  <div>Wind gust: {this.state.userLocation.windGust}m/s</div>
                  <div>Precipitation: {this.state.userLocation.precipProb}&#x25;</div>
                  <div>Thunder propbablity: {this.state.userLocation.thunderProb}&#x25;</div>
                  <div>Visibility: {this.state.userLocation.visibility}</div>
                </div>
                <div className="wind-direction__container">
                  <div
                    className="wind-direction__arrow"
                    style={{ transform: `rotate(${this.state.userLocation.windDir}deg)` }}
                  >
                    &#x2B07;
                  </div>
                  <div className="wind-direction__text">Direction: {this.state.userLocation.windDirString}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default CurrentLocation;
