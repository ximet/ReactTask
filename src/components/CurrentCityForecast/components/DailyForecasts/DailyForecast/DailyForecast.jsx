import classes from './DailyForecast.module.scss';
import { getDayShort } from '../../../../../utils/dateTimeUtils';

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
    </div>
  );
}

export default DailyForecast;
