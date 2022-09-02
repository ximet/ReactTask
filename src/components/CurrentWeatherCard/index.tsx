import React, { FC } from 'react';
import { LocationData, WeatherData } from 'types';
import styles from './styles.module.scss';

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
          <h2 className={styles.locationName}>
            {location.name}, {location.country}
          </h2>
          <div className={styles.temperatureBox}>
            <img
              className={styles.symbol}
              src={`https://developer.foreca.com/static/images/symbols/${weatherData.symbol}.png`}
              alt={weatherData.symbol}
            />
            <h1 className={styles.temperature}>{weatherData.temperature}&deg;C </h1>
          </div>
          <h3 className={styles.symbolPhrase}>{weatherData.symbolPhrase}</h3>
          <div className={styles.weatherDataBox}>
            <h5>Feels like {weatherData.feelsLikeTemp}&deg;</h5>
            <h5>Wind {weatherData.windSpeed} km/h</h5>
            <h5>Visibility {(weatherData.visibility * 0.001).toFixed(2)} km</h5>
            <h5>Humidity {weatherData.relHumidity} %</h5>
            <h5>Dew Point {weatherData.dewPoint}&deg;</h5>
            <h5>Cloudines {weatherData.cloudiness}%</h5>
          </div>
        </div>
      ) : (
        <div>Getting the location data&hellip; </div>
      )}
    </div>
  );
};

export default CurrentWeatherCard;
