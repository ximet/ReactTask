// @flow
import React, { useState, useEffect } from 'react';
import classes from './FavoriteCityForecast.module.scss';
import ApiService from '../../../services/ForecastApiService';
import { useCookies } from 'react-cookie';
import IconClose from '../../../assets/img/svg/close-icon.svg';
import type { FavoriteCityForecastPropsType } from './FavoriteCityForecastPropsType';

function FavoriteCityForecast({ location }: FavoriteCityForecastPropsType): React$Node {
  const [forecast, setForecast] = useState({});
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    const setForecastValue = async (): Promise<void> => {
      const { current } = await ApiService.getCurrentForecast(location.id, cookies);
      setForecast(current);
    };

    setForecastValue();
  }, []);

  const symbolUrl = forecast.symbol
    ? `https://developer.foreca.com/static/images/symbols/${forecast.symbol}.png`
    : '';

  return (
    <div className={classes.item}>
      <svg className={classes.closeIcon} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.353553" y1="1.1849" x2="6.81509" y2="7.64644" stroke="#BDBDBD"/>
        <line x1="6.8151" y1="1.35355" x2="0.353562" y2="7.81509" stroke="#BDBDBD"/>
      </svg>
      <div className={classes.itemInfo}>
        <div className={classes.mainInfo}>
          <img className={classes.icon} src={symbolUrl} alt="forecast" title="forecast" />
          <div className={classes.temperature}>{forecast.temperature}</div>
        </div>
        <div className={classes.additionalInfo}>
          <div className={classes.cityName}>{location.name}</div>
          <div className={classes.wind}>Wind: {forecast.windSpeed} km/h</div>
          <div className={classes.humidity}>Humidity: {forecast.relHumidity}%</div>
          <div className={classes.precitipate}>Precitipate: {forecast.precipProb}%</div>
          <a className={classes.linkMore} href="#">
            read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCityForecast;
