import { Link } from 'react-router-dom';
import classes from './citiesListPage.scss';
import { locationsInfo, flagsDomain } from './locationsInfo';
import { formatLocationsInfo } from '../../dataService/formatter';

const countriesInfo = formatLocationsInfo(locationsInfo, flagsDomain);

function Countries(props) {
  const { countriesInfo } = props;

  return (
    <ul>
      {countriesInfo.map(countryInfo => (
        <li key={countryInfo.country} className={classes.countryContainer}>
          <img src={countryInfo.flagURL}></img>
          <span className={classes.country}>{countryInfo.country}</span>
          <Cities citiesInfo={countryInfo.cities} />
        </li>
      ))}
    </ul>
  );
}

function Cities(props) {
  const { citiesInfo } = props;

  return (
    <ul className={classes.cities}>
      {citiesInfo.map(city => (
        <li key={city} className={classes.city}>
          <Link to={`/world_weather/${city}`} className={classes.link}>
            {city}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function CitiesListPage() {
  return <Countries countriesInfo={countriesInfo} />;
}

export default CitiesListPage;
