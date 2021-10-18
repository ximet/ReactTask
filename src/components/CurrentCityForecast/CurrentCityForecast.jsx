import classes from './CurrentCityForecast.module.scss';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import DailyForecasts from './components/DailyForecasts/DailyForecasts';
import HourlyForecastChart from './components/HourlyForecastChart/HourlyForecastChart';
import ApiService from '../../services/ForecastApiService';
import { getDay, formatTime } from '../../utils/dateTimeUtils';
import {
  FORECAST_SYMBOL_EXT,
  FORECAST_SYMBOL_LINK,
  CURRENT_CITY_FORECAST_ALT_TEXT,
  CURRENT_CITY_FORECAST_TITLE_TEXT
} from '../../utils/constants';

function CurrentCityForecast({ currentLocation }) {
  const [currentCityForecast, setCurrentCityForecast] = useState({});

  const currentLocationId = currentLocation.id;
  console.log(currentLocation);
  const symbolUrl = currentCityForecast.forecast?.symbol
    ? `${FORECAST_SYMBOL_LINK}${currentCityForecast.forecast?.symbol}${FORECAST_SYMBOL_EXT}`
    : '';
  const forecastTime = formatTime(currentCityForecast.forecast?.time);
  const forecastDay = getDay(currentCityForecast.forecast?.time);

  useEffect(async () => {
    try {
      if (currentLocationId) {
        const currentForecast = await ApiService.getCurrentForecast(currentLocationId);

        setCurrentCityForecast({
          forecast: currentForecast.data.current,
          city: currentLocation
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, [currentLocation]);

  return (
    <div className={classes.currentCityContainer}>
      <div className={classes.currentCityInfo}>
        <div className={classes.forecastInfo}>
          <div className={classes.mainInfo}>
            <img
              className={classes.icon}
              src={symbolUrl}
              alt={CURRENT_CITY_FORECAST_ALT_TEXT}
              title={CURRENT_CITY_FORECAST_TITLE_TEXT}
            />
            <div className={classes.temperature}>{currentCityForecast.forecast?.temperature}</div>
          </div>
          <div className={classes.additionalInfo}>
            <div className={classes.precitipate}>
              Precitipate: {currentCityForecast.forecast?.precipProb}%
            </div>
            <div className={classes.humidity}>
              Humidity: {currentCityForecast.forecast?.relHumidity}%
            </div>
            <div className={classes.wind}>Wind: {currentCityForecast.forecast?.windSpeed} km/h</div>
          </div>
        </div>
        <div className={classes.locationInfo}>
          <div className={classes.cityName}>{currentCityForecast.city?.name}</div>
          <div className={classes.areaName}>
            {currentCityForecast.city?.adminArea} / {currentCityForecast.city?.country}
          </div>
          <div className={classes.forecastDate}>
            {forecastDay} {forecastTime}
          </div>
          <div className={classes.forecastDate}>{currentCityForecast.forecast?.symbolPhrase}</div>
        </div>
      </div>

      <HourlyForecastChart locationId={currentLocationId} />
      <DailyForecasts locationId={currentLocationId} />
    </div>
  );
}

const mapStateToProps = ({ locationManager: { currentLocation } }) => {
  return {
    currentLocation
  };
};

const WrappedCurrentCityForecast = connect(mapStateToProps)(CurrentCityForecast);

export default WrappedCurrentCityForecast;
