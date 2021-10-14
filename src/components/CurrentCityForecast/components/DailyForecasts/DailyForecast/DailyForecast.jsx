import classes from './DailyForecast.module.scss';
import { getDayShort } from '../../../../../utils/dateTimeUtils';
import { ReactComponent as WindCompasBg } from '../../../../../assets/img/svg/wind-compas-bg.svg';
import { ReactComponent as WindCompas } from '../../../../../assets/img/svg/wind-compas.svg';

function DailyForecast({ forecast }) {
  const symbolUrl = `https://developer.foreca.com/static/images/symbols/${forecast.symbol}.png`;
  const dayName = getDayShort(forecast.date, 'en-US');
  console.log(forecast);

  return (
    <div className={classes.forecastItem}>
      <div className={classes.title}>{dayName}</div>
      <img className={classes.icon} src={symbolUrl} alt="forecast" title="forecast" />
      <div className={classes.temperature}>
        <span className={classes.sun}>{forecast.maxTemp}</span>
        <span className={classes.shadow}>{forecast.minTemp}</span>
      </div>
      <div className={classes.wind}>
        <div className={classes.windSpeed}>
          <div className={classes.value}>{forecast.maxWindSpeed}</div>
          <div className={classes.measure}>km/h</div>
        </div>
        <div className={classes.windDir}>
          <WindCompasBg />
          <span
            className={classes.windCompas}
            style={{ transform: `translate(-50%, -50%) rotate(${forecast.windDir}deg) ` }}
          >
            <WindCompas />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DailyForecast;
