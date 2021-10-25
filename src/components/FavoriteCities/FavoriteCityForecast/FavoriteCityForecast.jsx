// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import classes from './FavoriteCityForecast.module.scss';
import { ReactComponent as IconClose } from '../../../assets/img/svg/close-icon.svg';
import {
  WIND_SPEED_MEASURE,
  PRECITIPATE_MEASURE,
  HUMIDITY_MEASURE
} from '../../../utils/constants';
import { getForecast, setFavoriteCities } from '../../../actions/locationsManagerActions';
import { selectCurrentForecast } from '../../../selectors/selectorsForecast';
import { getForecastSymbolUrl } from '../../../utils/forecastUtils';
import { useCacheForecast } from '../../../hooks/forecastHooks';
import type {
  FavoriteCityForecastPropsType,
  FavoriteCityForecastOwnPropsType
} from './FavoriteCityForecastPropsType';

function FavoriteCityForecast(props: FavoriteCityForecastPropsType): React$Node {
  const forecast = selectCurrentForecast(props.forecasts, props.location.id);
  const symbolUrl = getForecastSymbolUrl(forecast);
  const handleFavoriteCityDelete = event => {
    props.setFavoriteCities(props.location, false);
  };

  useCacheForecast(props.forecasts, props.location, props.getForecast);

  return (
    <div className={classes.item}>
      <span className={classes.closeIcon} onClick={handleFavoriteCityDelete}>
        <IconClose />
      </span>
      <div className={classes.itemInfo}>
        <div className={classes.mainInfo}>
          <img className={classes.icon} src={symbolUrl} alt="forecast" title="forecast" />
          <div className={classes.temperature}>{forecast?.temperature}</div>
        </div>
        <div className={classes.additionalInfo}>
          <div className={classes.cityName}>{props.location?.name}</div>
          <div className={classes.wind}>
            Wind: {forecast?.windSpeed} {WIND_SPEED_MEASURE}
          </div>
          <div className={classes.humidity}>
            Humidity: {forecast?.relHumidity}
            {HUMIDITY_MEASURE}
          </div>
          <div className={classes.precitipate}>
            Precitipate: {forecast?.precipProb}
            {PRECITIPATE_MEASURE}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ locationManager: { forecasts } }) => {
  return {
    forecasts: forecasts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getForecast: locationId => dispatch(getForecast(locationId)),
    setFavoriteCities: (location, isFavorite) => dispatch(setFavoriteCities(location, isFavorite))
  };
};

const WrappedFavoriteCityForecast = (connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteCityForecast): React.AbstractComponent<FavoriteCityForecastOwnPropsType>);

export default WrappedFavoriteCityForecast;
