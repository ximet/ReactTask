import { useState } from "react";
import { useEffect } from "react"
import React, { useContext } from 'react';
import axios from "axios";
import { AuthenticationContext, TemperatureContext } from '../Context';
import Loader from '../components/Loader';

export default function CurrentLocation() {
  const [userLocation, setUserLocation] = useState();
  const [userCoords, setUserCoords] = useState();
  const { authenticated, setAuth } = useContext(AuthenticationContext);
  const { temperature, setTemperature } = useContext(TemperatureContext);

  const updateIcon = () => {
    document.getElementById('icon-weather').src =
      'https://developer.foreca.com/static/images/symbols/' + userLocation.symbol + '.png';
  };

  useEffect(() => {
    if (!authenticated) return;

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
            .then(data => setUserCoords(data.data));
        })();
      });
    } else {
      alert('Location Not Available');
    }
  }, [authenticated]);

  useEffect(() => {
    if (!userCoords) return;

    (async function () {
      await axios
        .post('http://localhost:3000/get-location-current-weather-by-id', {
          id: userCoords.id,
          temp: temperature
        })
        .then(data => setUserLocation(data.data))
        .catch(err => {
          console.error('error occured: ', err.message);
        });
    })();

  }, [userCoords]);

  useEffect(() => {
    if (!userLocation) return
    updateIcon()
  }, [userLocation])

  return (
    <>
      {!userLocation ? <Loader /> :
        <div className="detailed-page__forecast-content">
          <h2 >The weather in {userCoords.name} currently</h2>
          <div className="forecast-content">
            <div className="forecast-content__temperatute grid-element grid-element--two">
              <div className="temperature__container">
                <div className="temperature">{userLocation.temperature}&deg;</div>
                <div className="temperature__real-feel">
                  Real feel: {userLocation.feelsLikeTemp}&deg;
                </div>
              </div>
              <div className="forecast-content__data">
                <div>Preassure: {userLocation.pressure} hPa</div>
                <div>Relative humidity: {userLocation.relHumidity}&#x25;</div>
                <div>Cloudiness: {userLocation.cloudiness}&#x25;</div>
                <div>Dew point: {userLocation.dewPoint}&deg;</div>
                <div>UV: {userLocation.uvIndex}</div>
              </div>
            </div>
            <div className="forecast-content__icon grid-element grid-element--one">
              <div className="icon-container">
                <img id="icon-weather" alt="Logo" />
                <div className="icon-container__text">{userLocation.symbolPhrase}</div>
              </div>
            </div>
            <div className="forecast-content__wind grid-element grid-element--two">
              <div className="forecast-content__data">
                <div>Wind speed: {userLocation.windSpeed}m/s</div>
                <div>Wind gust: {userLocation.windGust}m/s</div>
                <div>Precipitation: {userLocation.precipProb}&#x25;</div>
                <div>Thunder propbablity: {userLocation.thunderProb}&#x25;</div>
                <div>Visibility: {userLocation.visibility}</div>
              </div>
              <div className="wind-direction__container">
                <div
                  className="wind-direction__arrow"
                  style={{ transform: `rotate(${userLocation.windDir}deg)` }}
                >
                  &#x2B07;
                </div>
                <div className="wind-direction__text">Direction: {userLocation.windDirString}</div>
              </div>
            </div>
          </div>
        </div>}
    </>
  )
}