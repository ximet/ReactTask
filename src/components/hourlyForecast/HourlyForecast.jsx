import classes from './hourlyForecast.scss';
import PropTypes from 'prop-types';

function HourlyForecast(props) {
  const { hourlyData } = props;

  return (
    <div className={classes.hourlyForecast}>
      {hourlyData.map(hourData => (
        <div key={hourData.date} className={classes.hourForecast}>
          <p>{hourData.time}</p>
          <img className={classes.symbol} src={hourData.symbolUrl} alt={hourData.symbol}></img>
          <p>
            {hourData.temperature} <span>&#176;C</span>
          </p>
        </div>
      ))}
    </div>
  );
}

HourlyForecast.propTypes = {
  hourlyData: PropTypes.array
};

export default HourlyForecast;
