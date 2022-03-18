import classes from './currentForecastCard.scss';
import PropTypes from 'prop-types';
import ForecastDetailsGroup from '../forecastDetailGroup/ForecastDetailGroup';

function CurrentForecastCard(props) {
  const { forecastData, locationData } = props;

  return (
    <div className={classes.card}>
      <header className={classes.card_header}>
        <div className={classes.flexContainer}>
          <div className={classes.card_header__title}>
            <p>{locationData.city}</p>
            <p>
              {forecastData.temperature} <span>&#176;C</span>
            </p>
          </div>
          <img
            className={classes.symbol}
            src={forecastData.symbolUrl}
            alt={forecastData.symbol}
          ></img>
        </div>
        <p className={classes.card_header__description}>
          Feels like {forecastData.feelsLikeTemp}
          <span className={classes.degree}>&#176;C</span>, {forecastData.symbolPhrase}
        </p>
      </header>

      <ForecastDetailsGroup detailsData={forecastData.details} />
    </div>
  );
}

CurrentForecastCard.propTypes = {
  forecastData: PropTypes.object
};

export default CurrentForecastCard;
