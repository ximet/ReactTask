// @flow
import classes from './DailyForecasts.module.scss';
import { v4 as uuidv4 } from 'uuid';
import DailyForecast from './DailyForecast/DailyForecast';
import { useEffect, useState } from 'react';
import { setCurrentDailyForecast } from '../../../../actions/locationsManagerActions';
import { connect } from 'react-redux';
import * as React from 'react';
import type { DailyForecastPropsType, DailyForecastOwnPropsType } from './DailyForecastPropsType';

function DailyForecasts({
  locationId,
  currentDailyForecast,
  setCurrentDailyForecast
}: DailyForecastPropsType): React$Node {
  const dailyForecastData = currentDailyForecast || [];

  useEffect(() => {
    setCurrentDailyForecast(locationId);
  }, [locationId, setCurrentDailyForecast]);

  return (
    <div className={classes.forecastsContainer}>
      {dailyForecastData.map(forecast => (
        <DailyForecast key={uuidv4()} forecast={forecast} />
      ))}
    </div>
  );
}

const mapStateToProps = ({ locationManager: { currentDailyForecast } }) => {
  return {
    currentDailyForecast
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentDailyForecast: locationId => dispatch(setCurrentDailyForecast(locationId))
  };
};

const WrappedDailyForecasts = (connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyForecasts): React.AbstractComponent<DailyForecastOwnPropsType>);

export default WrappedDailyForecasts;
