// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import classes from './FavoriteCityForecast.module.scss';
import { ReactComponent as IconClose } from '../../../assets/img/svg/close-icon.svg';
import { FORECAST_SYMBOL_LINK, FORECAST_SYMBOL_EXT } from '../../../utils/constants';
import { setFavoriteCities } from '../../../actions/locationsManagerActions';
import { getFavoriteForecast } from '../../../actions/locationsManagerActions';
import { selectCurrentForecast } from '../../../selectors/selectorsForecast';
import { getForecastSymbolUrl } from '../../../utils/forecastUtils';
import ForecastCacheController from '../../../controllers/ForecastCacheController';

import type {
  FavoriteCityForecastPropsType,
  FavoriteCityForecastOwnPropsType
} from './FavoriteCityForecastPropsType';
import Preloader from '../../Preloader/Preloader';

function FavoriteCityForecast({
  location,
  setFavoriteCities,
  forecasts,
  isLoadingStates,
  ...props
}: FavoriteCityForecastPropsType): React$Node {
  const forecast = selectCurrentForecast(forecasts, location.id);
  const isLoading = isLoadingStates[location.id];
  console.log(isLoadingStates);

  const symbolUrl = getForecastSymbolUrl(forecast);

  React.useEffect(() => {
    if (ForecastCacheController(location.id, forecasts)) props.getFavoriteForecast(location.id);
  }, [location]);

  const handleFavoriteCityDelete = event => {
    setFavoriteCities(location, false);
  };

  return (
    <div className={classes.item}>
      {isLoading ? (
        <>
          <span className={classes.closeIcon} onClick={handleFavoriteCityDelete}>
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
            </div>
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

const mapStateToProps = ({ locationManager: { forecasts }, ...state }) => {
  return {
    forecasts: forecasts,
    isLoadingStates: state.preloaderManager.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFavoriteForecast: locationId => dispatch(getFavoriteForecast(locationId)),
    setFavoriteCities: (location, isFavorite) => dispatch(setFavoriteCities(location, isFavorite))
  };
};

const WrappedFavoriteCityForecast = (connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteCityForecast): React.AbstractComponent<FavoriteCityForecastOwnPropsType>);

export default WrappedFavoriteCityForecast;
