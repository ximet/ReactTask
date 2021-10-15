import classes from './CurrentCityForecast.module.scss';
import { useState, useEffect } from 'react';
import DailyForecasts from './components/DailyForecasts/DailyForecasts';
import HourlyForecastChart from './components/HourlyForecastChart/HourlyForecastChart';
import ApiService from '../../services/ForecastApiService';
import mockLocation from './mockLocation';
import { getDay, formatTime } from '../../utils/dateTimeUtils';
import {
  FORECAST_SYMBOL_EXT,
  FORECAST_SYMBOL_LINK,
  CURRENT_CITY_FORECAST_ALT_TEXT,
  CURRENT_CITY_FORECAST_TITLE_TEXT
} from '../../utils/constants';

function CurrentCityForecast() {
  const [currentCityForecast, setCurrentCityForecast] = useState({});

  const currentLocationId = mockLocation.id;
  const symbolUrl = `${FORECAST_SYMBOL_LINK}${currentCityForecast.forecast?.symbol}${FORECAST_SYMBOL_EXT}`;
  const forecastTime = formatTime(currentCityForecast.forecast?.time);
  const forecastDay = getDay(currentCityForecast.forecast?.time);

  useEffect(async () => {
    const currentForecast = await ApiService.getCurrentForecast(currentLocationId);
    const currentCity = await ApiService.getLocationInfo(currentLocationId);

    setCurrentCityForecast({
      forecast: currentForecast.data.current,
      city: currentCity.data
    });
  }, []);

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

export default CurrentCityForecast;
