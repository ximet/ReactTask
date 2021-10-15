// @flow
import React, { useState, useEffect } from 'react';
import classes from './FavoriteCityForecast.module.scss';
import ApiService from '../../../services/ForecastApiService';
import { ReactComponent as IconClose } from '../../../assets/img/svg/close-icon.svg';
import { FORECAST_SYMBOL_LINK, FORECAST_SYMBOL_EXT } from '../../../utils/constants';
import type { FavoriteCityForecastPropsType } from './FavoriteCityForecastPropsType';

function FavoriteCityForecast({ location }: FavoriteCityForecastPropsType): React$Node {
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    const setForecastValue = async (): Promise<void> => {
      let currentForecast = {};
      try {
        const { data } = await ApiService.getCurrentForecast(location.id);
        currentForecast = data.current;
      } catch (error) {
        console.log(error);
      }

      setForecast(currentForecast);
    };

    setForecastValue();
  }, []);

  const symbolUrl = forecast?.symbol
    ? `${FORECAST_SYMBOL_LINK}${forecast?.symbol}${FORECAST_SYMBOL_EXT}`
    : '';

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

export default FavoriteCityForecast;
