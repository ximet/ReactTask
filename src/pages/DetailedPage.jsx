import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TemperatureContext } from '../Context';
import { useContext } from 'react';

export default function DetailedPage(props) {
  const [location, setLocation] = useState();
  const { temperature } = useContext(TemperatureContext);
  const params = new URLSearchParams(window.location.search);
  const locationName = params.get('name');
  const locationId = params.get('id');

  const updateIcon = iconImage => {
    document.getElementById('icon-weather').src =
      'https://developer.foreca.com/static/images/symbols/' + location.symbol + '.png';
  };

  const getFormatedDate = givenDate => {
    const localDate = givenDate.split('T');
    const localTime = localDate[1].split('+');

    return (
      <div>
        <div>
          Date: {localDate[0]}, Local time: {localTime[0]} (+ {localTime[1]} GMT)
        </div>
      </div>
    );
  };

  useEffect(() => {
    (async function () {
      await axios
        .post('http://localhost:3000/get-location-current-weather-by-id', {
          id: locationId,
          temp: temperature
        })
        .then(data => setLocation(data.data))
        .catch(err => {
          console.error('error occured: ', err.message);
        });
    })();
  }, []);

  useEffect(() => {
    if (!location) return;
    updateIcon();
  }, [location]);

  return (
    <div className="detailed-page">
      <h1>{locationName}</h1>
      <h2>Current weather</h2>
      {!!location && (
        <div className="detailed-page__forecast-content">
          <div className="detailed-page__date-time">{getFormatedDate(location.time)}</div>
          <div className="forecast-content">
            <div className="forecast-content__temperatute grid-element grid-element--two">
              <div className="temperature__container">
                <div className="temperature">{location.temperature}&deg;</div>
                <div className="temperature__real-feel">
                  Real feel: {location.feelsLikeTemp}&deg;
                </div>
              </div>
              <div className="forecast-content__data">
                <div>Preassure: {location.pressure} hPa</div>
                <div>Relative humidity: {location.relHumidity}&#x25;</div>
                <div>Cloudiness: {location.cloudiness}&#x25;</div>
                <div>Dew point: {location.dewPoint}&deg;</div>
                <div>UV: {location.uvIndex}</div>
              </div>
            </div>
            <div className="forecast-content__icon grid-element grid-element--one">
              <div className="icon-container">
                <img id="icon-weather" src={null} alt="Logo" />
                <div className="icon-container__text">{location.symbolPhrase}</div>
              </div>
            </div>
            <div className="forecast-content__wind grid-element grid-element--two">
              <div className="forecast-content__data">
                <div>Wind speed: {location.windSpeed}m/s</div>
                <div>Wind gust: {location.windGust}m/s</div>
                <div>Precipitation: {location.precipProb}&#x25;</div>
                <div>Thunder propbablity: {location.thunderProb}&#x25;</div>
                <div>Visibility: {location.visibility}</div>
              </div>
              <div className="wind-direction__container">
                <div
                  className="wind-direction__arrow"
                  style={{ transform: `rotate(${location.windDir}deg)` }}
                >
                  &#x2B07;
                </div>
                <div className="wind-direction__text">Direction: {location.windDirString}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
