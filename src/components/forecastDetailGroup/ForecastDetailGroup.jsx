import classes from './forecastDetailGroup.scss';

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
  }
};

function ForecastDetails(props) {
  const { detailsKeys, detailsData } = props;

  return (
    <ul className={classes.forecastDetails}>
      {detailsKeys.map(key => (
        <li key={key} className={classes[key]}>
          <span>{detailsData[key] + details[key].unit}</span> {details[key].desc}
        </li>
      ))}
    </ul>
  );
}

export default ForecastDetails;
