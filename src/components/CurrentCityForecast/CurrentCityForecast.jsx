import classes from './CurrentCityForecast.module.scss';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import DailyForecasts from './components/DailyForecasts/DailyForecasts';
import HourlyForecastChart from './components/HourlyForecastChart/HourlyForecastChart';
import ApiService from '../../services/ForecastApiService';

function CurrentCityForecast() {
  const [currentCityForecast, setCurrentCityForecast] = useState({});
  const [cookies] = useCookies(['token']);

  const currentLocationId = '102643743';

  useEffect(async () => {
    const currentForecast = await ApiService.getCurrentForecast(currentLocationId, cookies);
    const currentCity = await ApiService.getLocationInfo(currentLocationId, cookies);

    setCurrentCityForecast({
      forecast: currentForecast.current,
      city: currentCity
    });
  }, []);

  const symbolUrl = `https://developer.foreca.com/static/images/symbols/${currentCityForecast.forecast?.symbol}.png`;

  return (
    <div className={classes.currentCityContainer}>
      <div className={classes.currentCityInfo}>
        <div className={classes.forecastInfo}>
          <div className={classes.mainInfo}>
            <img className={classes.icon} src={symbolUrl} alt="forecast" title="forecast" />
            <div className={classes.temperature}>{currentCityForecast.forecast?.temperature}</div>
          </div>
          <div className={classes.additionalInfo}>
            <div className={classes.precitipate}>
              Precitipate: {currentCityForecast.forecast?.precipProb}%
            </div>
            <div className={classes.humidity}>
              Humidity: {currentCityForecast.forecast?.relHumidity}%
            </div>
            <div className={classes.wind}>Wind: {currentCityForecast.forecast?.windSpeed} km/h</div>
          </div>
        </div>
        <div className={classes.locationInfo}>
          <div className={classes.cityName}>{currentCityForecast.city?.name}</div>
          <div className={classes.areaName}>
            {currentCityForecast.city?.adminArea} / {currentCityForecast.city?.country}
          </div>
          <div className={classes.forecastDate}>friday 11:00</div>
          <div className={classes.forecastDate}>{currentCityForecast.forecast?.symbolPhrase}</div>
        </div>
      </div>

      <HourlyForecastChart locationId={currentLocationId} />
      <DailyForecasts locationId={currentLocationId} />
    </div>
  );
}

export default CurrentCityForecast;
