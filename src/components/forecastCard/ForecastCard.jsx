import classes from './forecastCard.scss';
import ForecastDetailsGroup from '../forecastDetailGroup/ForecastDetailGroup';
import { upperCaseLetter } from '../../assets';
import DataService from '../../dataService/DataService';

function WeatherCard(props) {
  const { data, detailsKeys } = props;
  const weatherData = data;
  const locationData = weatherData.location;

  return (
    <div className={classes.card}>
      <header className={classes.card_header}>
        <div className={classes.flexContainer}>
          <div className={classes.card_header__title}>
            <p>{locationData.adminArea}</p>
            <p>
              {weatherData.temperature} <span>&#176;C</span>
            </p>
          </div>
          <img
            className={classes.symbol}
            src={DataService.getSymbolUrl(weatherData.symbol)}
            alt={weatherData.symbol}
          ></img>
        </div>
        <p className={classes.card_header__description}>
          Feels like {weatherData.feelsLikeTemp}
          <span className={classes.degree}>&#176;C</span>,{' '}
          {upperCaseLetter(weatherData.symbolPhrase)}
        </p>
      </header>

      <ForecastDetailsGroup detailsKeys={detailsKeys} detailsData={weatherData} />
    </div>
  );
}

export default WeatherCard;
