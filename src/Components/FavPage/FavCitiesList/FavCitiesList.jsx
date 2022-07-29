import { getWeatherSymbol } from '../../../Helpers/functions';
import { ThemeContext } from '../../../context/themeContext';
import { useContext } from 'react';

import styles from './FavCitiesList.module.scss';
import { WiRaindrop, WiStrongWind } from 'react-icons/wi';

function FavCitiesList({ data }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles[`${theme}-theme`]}>
      <div className={styles['container-item--title']}>
        <h3>{data.locationData.name}</h3>
        <p>{data.locationData.country}</p>
      </div>

      <div className={styles['container-item-main']}>
        <div className={styles['container-item-main--image']}>
          <img width="60" src={getWeatherSymbol(data.currWeather.symbol)} />
          <small>
            {data.currWeather.symbolPhrase.charAt(0).toUpperCase() +
              data.currWeather.symbolPhrase.slice(1)}
          </small>
        </div>
        <p className={styles.temperature}>{data.currWeather.temperature}&deg;</p>
      </div>

      <div className={styles.wrapper}>
        <div className={styles['container-item--detail']}>
          <WiRaindrop />
          <p>{data.currWeather.precipProb}%</p>
        </div>
        <div className={styles['container-item--detail']}>
          <WiStrongWind />
          <p>{data.currWeather.windSpeed * 3.6} km/h</p>
        </div>
      </div>
    </div>
  );
}

export default FavCitiesList;
