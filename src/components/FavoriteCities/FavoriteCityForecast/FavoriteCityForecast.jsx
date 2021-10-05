import classes from './FavoriteCityForecast.module.scss';

function FavoriteCityForecast(props) {
  return (
    <div className={classes.item}>
      <div className={classes.itemInfo}>
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
          <div className={classes.cityName}>{props.cityName}</div>
          <div className={classes.wind}>Wind: 1 km/h</div>
          <div className={classes.humidity}>Humidity: 30%</div>
          <div className={classes.precitipate}>Precitipate: 0%</div>
          <a className={classes.linkMore} href="#">
            read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCityForecast;
