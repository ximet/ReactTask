import classes from './dailyForecast.scss';
import PropTypes from 'prop-types';

function DailyForecast(props) {
  const { dailyData, onClick, activeCardId } = props;

  return (
    <div className={classes.dailyForecast}>
      {dailyData.map(dayData => (
        <div
          key={dayData.id}
          className={
            activeCardId === dayData.id
              ? `${classes.dayForecast} ${classes.active}`
              : `${classes.dayForecast}`
          }
          onClick={() => onClick(dayData.id)}
        >
          <p className={classes.date}>{dayData.dayOfWeek[0]}</p>
          <img className={classes.symbol} src={dayData.symbolUrl} alt={dayData.symbol}></img>
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

DailyForecast.propTypes = {
  dailyData: PropTypes.array,
  onClick: PropTypes.func,
  activeCardId: PropTypes.string
};

export default DailyForecast;
