import { formatDate, getWeatherSymbol } from '../../../Helpers/functions';
import { opts } from '../../../Helpers/constants';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveFavCity, deleteFavCity } from '../../../redux';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from './CurrentForecast.module.scss';

function CurrentForecast({ locationData, currWeather }) {
  const favCityList = useSelector((state) => state);
  const dispatch = useDispatch();

  const isFound = favCityList.some((item) => {
    return item.locationData.id === locationData.id;
  });

  function onClickSaveCity() {
    dispatch(saveFavCity({ locationData, currWeather }));
  }

  function onClickDeleteCity() {
    dispatch(deleteFavCity({ locationData, currWeather }));
  }

  return (
    <div className={styles.container}>
      {isFound ? (
        <AiFillStar
          className={styles.starIcon}
          title="Delete location from favourites"
          onClick={onClickDeleteCity}
        />
      ) : (
        <AiOutlineStar
          className={styles.starIcon}
          title="Save location as favourite"
          onClick={onClickSaveCity}
        />
      )}
      <div className={styles['container__location']}>
        <p className={styles['location-name']}>{locationData.name}</p>
        <p className={styles['country-name']}>{locationData.country}</p>
        <small>
          {`${formatDate(opts.dateLong, currWeather.time)} ${formatDate(
            opts.year,
            currWeather.time
          )}`}
        </small>
      </div>
      <div className={styles['container__weather']}>
        <img width="120" src={getWeatherSymbol(currWeather.symbol)} />
        <div className={styles['container__weather-details']}>
          <p className={styles['temperature']}>{currWeather.temperature}&deg;</p>
          <p>
            {currWeather.symbolPhrase.charAt(0).toUpperCase() + currWeather.symbolPhrase.slice(1)}
          </p>
          <p>Feels like {currWeather.feelsLikeTemp}&deg;</p>
        </div>
      </div>
      <div>
        <small>
          <strong>Updated as of {formatDate(opts.time, currWeather.time)}</strong>
        </small>
      </div>

      <div className={styles.container__grid}>
        <div className={styles['grid-item']}>
          <small>Rain Chance: {currWeather.precipProb}%</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Cloudiness: {currWeather.cloudiness}%</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Humidity: {currWeather.relHumidity}%</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Wind Speed: {currWeather.windSpeed * 3.6} km/h</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Visibility: {currWeather.visibility / 1000} km</small>
        </div>

        <div className={styles['grid-item']}>
          <small>Pressure: {parseFloat(currWeather.pressure / 1000).toFixed(3)} bar</small>
        </div>
      </div>
    </div>
  );
}

export default CurrentForecast;
