import classes from './countries.scss';
import Cities from '../cities/Cities';

function Countries(props) {
  const {countriesInfo} = props;

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
  )
}

export default Countries;