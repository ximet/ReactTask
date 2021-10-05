import classes from './CurrentCityForecast.module.scss';

import DailyForecasts from './components/DailyForecasts/DailyForecasts';
import HourlyForecastChart from './components/HourlyForecastChart/HourlyForecastChart';

function CurrentCityForecast() {
  return (
    <div className={classes.currentCityContainer}>
      <div className={classes.currentCityInfo}>
        <div className={classes.forecastInfo}>
          <div className={classes.mainInfo}>
            <img
              className={classes.icon}
              src="https://developer.foreca.com/static/images/symbols/d310.png"
              alt="forecast"
              title="forecast"
            />
            <div className={classes.temperature}>20</div>
          </div>
          <div className={classes.additionalInfo}>
            <div className={classes.precitipate}>Precitipate: 0%</div>
            <div className={classes.humidity}>Humidity: 30%</div>
            <div className={classes.wind}>Wind: 1 km/h</div>
          </div>
        </div>
        <div className={classes.locationInfo}>
          <div className={classes.cityName}>Gomel</div>
          <div className={classes.areaName}>Gomelskaya area</div>
          <div className={classes.forecastDate}>friday 11:00</div>
          <div className={classes.forecastDate}>sunny</div>
        </div>
      </div>

      <HourlyForecastChart />
      <DailyForecasts />
    </div>
  );
}

export default CurrentCityForecast;
