import classes from './dailyForecast.scss';
import DataService from '../../dataService/DataService';
import { getDayOfWeek } from '../../assets';

function DailyForecast(props) {
  const { dailyData } = props;

  return (
    <div className={classes.dailyForecast}>
      {dailyData.map(dayData => (
        <div key={dayData.date} className={classes.dayForecast}>
          <p className={classes.date}>{getDayOfWeek(dayData.date)}</p>
          <img
            className={classes.symbol}
            src={DataService.getSymbolUrl(dayData.symbol)}
            alt={dayData.symbol}
          ></img>
          <div className={classes.temperature}>
            <p className={classes.temperature_day}>
              {dayData.maxTemp}
              <span>&#176;C</span>
            </p>
            <p className={classes.temperature_night}>
              {dayData.minTemp}
              <span>&#176;C</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DailyForecast;
