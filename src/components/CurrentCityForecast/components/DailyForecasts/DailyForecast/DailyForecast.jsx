import classes from './DailyForecast.module.scss';
import { getDayShort, getDay } from '../../../../../utils/dateTimeUtils';
import { ReactComponent as WindCompasBg } from '../../../../../assets/img/svg/wind-compas-bg.svg';
import { ReactComponent as WindCompas } from '../../../../../assets/img/svg/wind-compas.svg';
import {
  FORECAST_SYMBOL_EXT,
  FORECAST_SYMBOL_LINK,
  DAILY_FORECAST_ALT_TEXT,
  DAILY_FORECAST_TITLE_TEXT,
  LOCALE_DATE
} from '../../../../../utils/constants';

function DailyForecast({ forecast }) {
  const symbolUrl = `${FORECAST_SYMBOL_LINK}${forecast.symbol}${FORECAST_SYMBOL_EXT}`;
  const dayName = getDayShort(forecast.date, LOCALE_DATE);

  return (
    <div className={classes.forecastItem}>
      <div className={classes.title}>{dayName}</div>
      <img
        className={classes.icon}
        src={symbolUrl}
        alt={`${DAILY_FORECAST_ALT_TEXT} ${getDay(forecast.date, LOCALE_DATE)}`}
        title={`${DAILY_FORECAST_TITLE_TEXT} ${getDay(forecast.date, LOCALE_DATE)}`}
      />
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
