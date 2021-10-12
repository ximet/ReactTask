import { useState, useEffect } from 'react';
import classes from './FavoriteCityForecast.module.scss';
import ApiService from '../../../services/ForecastApiService';
import { useCookies } from 'react-cookie';

function FavoriteCityForecast({ location }) {
  const [forecast, setForecast] = useState({});
  const [cookies] = useCookies(['token']);

  useEffect(async () => {
    const { current } = await ApiService.getCurrentForecast(location.id, cookies);
    setForecast(current);
  }, []);

  const symbolUrl = `https://developer.foreca.com/static/images/symbols/${forecast.symbol}.png`;
  return (
    <div className={classes.item}>
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
