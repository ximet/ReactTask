import React, { FC } from 'react';
import { LocationData, WeatherData } from 'types';
// import styles from './styles.module.scss';

type WeatherProps = {
  weatherData: WeatherData | null;
  location: LocationData | null;
  isAvailable: boolean;
  isEnabled: boolean;
};

const CurrentWeatherCard: FC<WeatherProps> = ({
  weatherData,
  location,
  isAvailable,
  isEnabled
}) => {
  return (
    <div>
      {!isAvailable ? (
        <div>Your browser does not support Geolocation</div>
      ) : !isEnabled ? (
        <div>Geolocation is not enabled</div>
      ) : weatherData && location ? (
        <div>
          <h1>{location.name}</h1>
          <h2>{location.country}</h2>
          <h6> {weatherData.symbol} </h6>
          <h1>{weatherData.temperature}&deg; C </h1>
          <h3>{weatherData.symbolPhrase}</h3>
          <h6>Feels like {weatherData.feelsLikeTemp}&deg;</h6>
          <h6>
            Wind {weatherData.windDir} {weatherData.windSpeed} km/h
          </h6>
          <h6>Visibility {weatherData.visibility * 0.001} km</h6>
          <h6>Humidity {weatherData.relHumidity} </h6>
          <h6>Dew Point {weatherData.dewPoint} </h6>
        </div>
      ) : (
        <div>Getting the location data&hellip; </div>
      )}
    </div>
  );
};

export default CurrentWeatherCard;
