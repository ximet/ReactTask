import classes from './CurrentCityForecast.module.scss';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import DailyForecasts from './components/DailyForecasts/DailyForecasts';
import HourlyForecastChart from './components/HourlyForecastChart/HourlyForecastChart';
import { getDay, formatTime } from '../../utils/dateTimeUtils';
import Preloader from '../Preloader/Preloader';
import { getForecastSymbolUrl } from '../../utils/forecastUtils';
import {
  CURRENT_CITY_FORECAST_ALT_TEXT,
  CURRENT_CITY_FORECAST_TITLE_TEXT,
  WIND_SPEED_MEASURE,
  PRECITIPATE_MEASURE,
  HUMIDITY_MEASURE
} from '../../utils/constants';
import { selectCurrentForecast } from '../../selectors/selectorsForecast';
import { getForecast } from '../../actions/locationsManagerActions';
import { useCacheForecast } from '../../hooks/forecastHooks';

function CurrentCityForecast(props) {
  const currentLocationId = props.currentLocation.id;
  const currentForecast = selectCurrentForecast(props.forecasts, currentLocationId);
  const symbolUrl = getForecastSymbolUrl(currentForecast);
  const forecastTime = formatTime(currentForecast?.time);
  const forecastDay = getDay(currentForecast?.time);

  useCacheForecast(props.forecasts, props.currentLocation, props.getForecast);

  return (
    <div className={classes.currentCityContainer}>
      <div className={classes.currentCityInfo}>
        {props.isLoading ? (
          <>
            <div className={classes.forecastInfo}>
              <div className={classes.mainInfo}>
                <img
                  className={classes.icon}
                  src={symbolUrl}
                  alt={CURRENT_CITY_FORECAST_ALT_TEXT}
                  title={CURRENT_CITY_FORECAST_TITLE_TEXT}
                />
                <div className={classes.temperature}>{currentForecast?.temperature}</div>
              </div>
              <div className={classes.additionalInfo}>
                <div className={classes.precitipate}>
                  Precitipate: {currentForecast?.precipProb}
                  {PRECITIPATE_MEASURE}
                </div>
                <div className={classes.humidity}>
                  Humidity: {currentForecast?.relHumidity}
                  {HUMIDITY_MEASURE}
                </div>
                <div className={classes.wind}>
                  Wind: {currentForecast?.windSpeed} {WIND_SPEED_MEASURE}
                </div>
              </div>
            </div>
            <div className={classes.locationInfo}>
              <div className={classes.cityName}>{props.currentLocation?.name}</div>
              <div className={classes.areaName}>
                {props.currentLocation?.adminArea} / {props.currentLocation?.country}
              </div>
              <div className={classes.forecastDate}>
                {forecastDay} {forecastTime}
              </div>
              <div className={classes.forecastDate}>{currentForecast?.symbolPhrase}</div>
            </div>
          </>
        ) : (
          <Preloader />
        )}
      </div>

      <HourlyForecastChart locationId={currentLocationId} />
      <DailyForecasts locationId={currentLocationId} />
    </div>
  );
}

const mapStateToProps = ({
  locationManager: { currentLocation, forecasts },
  preloaderManager: { currentLocation: currentLocationState }
}) => {
  return {
    currentLocation,
    forecasts,
    isLoading: currentLocationState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getForecast: locationId => dispatch(getForecast(locationId))
  };
};

const WrappedCurrentCityForecast = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentCityForecast);

export default WrappedCurrentCityForecast;
