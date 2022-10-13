import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currentWeatherSelector } from 'store/currentWeather/currentWeatherSelectors';
import styles from './Main.css';
import { CurrentWeatherType } from 'types/weatherTypes';
import { LocationInfoType } from 'types/cityInfoType';
import { convertTime, getImgURL } from '../../utils/helpers';
import {
  setInLocalStorage,
  getFavoriteCities,
  FAVORITE_CITIES_LS_LABEL
} from 'services/localStorage';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import classNames from 'classnames';

type MainCardProps = {
  currentWeather: CurrentWeatherType;
  location: LocationInfoType;
};

const getIsFavorite = (id: number): boolean => {
  const favoriteCities: LocationInfoType[] = getFavoriteCities();
  return favoriteCities.some(city => city.id === id);
};

const MainCard: FC<MainCardProps> = React.memo(({ location }) => {
  const { data: currentWeather } = useSelector(currentWeatherSelector);

  const {
    time,
    symbol,
    symbolPhrase,
    temperature,
    relHumidity,
    windSpeed,
    windDirString,
    windGust,
    precipProb,
    cloudiness,
    uvIndex
  } = currentWeather!;

  const date = convertTime(time);

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavoriteCities = () => {
    let favoriteCities = getFavoriteCities();
    if (!isFavorite) {
      favoriteCities = favoriteCities.concat(location);
    } else {
      favoriteCities = favoriteCities.filter(city => city.id !== location.id);
    }
    setInLocalStorage(favoriteCities, FAVORITE_CITIES_LS_LABEL);
  };

  const favoriteIconHandler = () => {
    setIsFavorite(!isFavorite);
    toggleFavoriteCities();
  };

  useEffect(() => {
    setIsFavorite(getIsFavorite(location.id));
  }, [location.id]);

  return (
    <div className={styles['main-card']}>
      <div className={classNames(styles['main-card__item'], styles['main-card__item_center'])}>
        <h3 className={styles['main-card__title']}>Location: {location.name}</h3>
        <p>
          {date.date}-{date.month}-{date.year} {date.hours}:{date.minutes}
        </p>
        <img src={getImgURL(symbol)} alt={symbolPhrase} />
        <p>
          {symbolPhrase}, {temperature}°C
        </p>
      </div>
      <div className={styles['main-card__item']}>
        <p>Relative humidity: {relHumidity}%</p>
        <p>
          Wind speed: {windSpeed}m/s ({windDirString})
        </p>
        <p>Wind gust: {windGust}m/s</p>
        <p>Probability of precipitation: {precipProb}%</p>
        <p>Cloudiness: {cloudiness}%</p>
        <p>UV index: {uvIndex}</p>
        <p>Visibility: hidden :))))</p>
        <p className={styles['like-icon__wrapper']}>
          {isFavorite ? (
            <FcLike onClick={favoriteIconHandler} size="30px" className={styles['like-icon']} />
          ) : (
            <FcLikePlaceholder
              onClick={favoriteIconHandler}
              size="30px"
              className={styles['like-icon']}
            />
          )}
        </p>
      </div>
    </div>
  );
});

export default MainCard;
