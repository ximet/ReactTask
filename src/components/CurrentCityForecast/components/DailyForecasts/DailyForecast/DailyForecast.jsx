import classes from './DailyForecast.module.scss';

function DailyForecast() {
  return (
    <div className={classes.forecastItem}>
      <div className={classes.title}>SU</div>
      <img
        className={classes.icon}
        src="https://developer.foreca.com/static/images/symbols/d310.png"
        alt="forecast"
        title="forecast"
      />
      <div className={classes.temperature}>
        <span className={classes.sun}>23</span>
        <span className={classes.shadow}>14</span>
      </div>
    </div>
  );
}

export default DailyForecast;
