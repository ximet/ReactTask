import classes from './forecastCard.scss';
import PropTypes from 'prop-types';
import ForecastDetailsGroup from '../forecastDetailGroup/ForecastDetailGroup';
import HourlyForecast from '../hourlyForecast/HourlyForecast';

function ForecastCard(props) {
  const { forecastData, hourlyData } = props;

  return (
    <div className={classes.card}>
        <header className={classes.card_header}>
          <div className={classes.flexContainer}>
            <div className={classes.card_header__info}>
              <p className={classes.title}>{forecastData.dayOfWeek[1]}</p>
              <p className={classes.description}>{forecastData.dayOfMonth}</p>
            </div>
            <img
              className={classes.symbol}
              src={forecastData.symbolUrl}
              alt={forecastData.symbol}
            ></img>
          </div>
        </header>
        <ForecastDetailsGroup detailsData={forecastData.details} />
      <HourlyForecast hourlyData={hourlyData} />
    </div>
  );
}

ForecastCard.propTypes = {
  forecastData: PropTypes.object,
  hourlyData: PropTypes.array
};

export default ForecastCard;
