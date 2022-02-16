import classes from './forecastDetailGroup.scss';
import PropTypes from 'prop-types';

const details = {
  cloudiness: {
    unit: '%',
    desc: 'Cloudiness'
  },
  precipProb: {
    unit: '%',
    desc: 'Probability of precipitation'
  },
  relHumidity: {
    unit: '%',
    desc: 'Relative humidity'
  },
  windSpeed: {
    unit: 'm/s',
    desc: 'Wind Speed'
  },
  thunderProb: {
    unit: '%',
    desc: 'Probability of thunder nearby'
  },
  sunrise: {
    desc: 'Sunrise'
  },
  sunset: {
    desc: 'Sunset'
  }
};

function ForecastDetailsGroup(props) {
  const { detailsData } = props;

  return (
    <ul className={classes.forecastDetails}>
      {Object.keys(detailsData).map(key => (
        <li key={key} className={`${classes.detail} ${classes[key]}`}>
          <span>{detailsData[key] + (details[key].unit || '')}</span> {details[key].desc}
        </li>
      ))}
    </ul>
  );
}

ForecastDetailsGroup.propTypes = {
  detailsData: PropTypes.object
};

export default ForecastDetailsGroup;
