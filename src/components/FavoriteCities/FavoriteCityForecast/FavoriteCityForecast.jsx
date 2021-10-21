// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import classes from './FavoriteCityForecast.module.scss';
import { ReactComponent as IconClose } from '../../../assets/img/svg/close-icon.svg';
import { FORECAST_SYMBOL_LINK, FORECAST_SYMBOL_EXT } from '../../../utils/constants';
import { getForecast } from '../../../actions/locationsManagerActions';
import { selectCurrentForecast } from '../../../selectors/selectorsForecast';
import { getForecastSymbolUrl } from '../../../utils/forecastUtils';
import ForecastCacheController from '../../../controllers/ForecastCacheController';

import type {
  FavoriteCityForecastPropsType,
  FavoriteCityForecastOwnPropsType
} from './FavoriteCityForecastPropsType';

function FavoriteCityForecast({
  location,
  forecasts,
  ...props
}: FavoriteCityForecastPropsType): React$Node {
  const forecast = selectCurrentForecast(forecasts, location.id);
  const symbolUrl = getForecastSymbolUrl(forecast);

  React.useEffect(() => {
    if (ForecastCacheController(location.id, forecasts)) props.getForecast(location.id);
  }, [location]);

  return (
    <div className={classes.item}>
      <span className={classes.closeIcon}>
        <IconClose />
      </span>
      <div className={classes.itemInfo}>
        <div className={classes.mainInfo}>
          <img className={classes.icon} src={symbolUrl} alt="forecast" title="forecast" />
          <div className={classes.temperature}>{forecast?.temperature}</div>
        </div>
        <div className={classes.additionalInfo}>
          <div className={classes.cityName}>{location?.name}</div>
          <div className={classes.wind}>Wind: {forecast?.windSpeed} km/h</div>
          <div className={classes.humidity}>Humidity: {forecast?.relHumidity}%</div>
          <div className={classes.precitipate}>Precitipate: {forecast?.precipProb}%</div>
          <a className={classes.linkMore} href="#">
            read more
          </a>
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
    getForecast: locationId => dispatch(getForecast(locationId))
  };
};

const WrappedFavoriteCityForecast = (connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteCityForecast): React.AbstractComponent<FavoriteCityForecastOwnPropsType>);

export default WrappedFavoriteCityForecast;
