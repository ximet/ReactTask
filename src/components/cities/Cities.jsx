import classes from './cities.scss';
import { Link } from 'react-router-dom';

function Cities(props) {
    const {citiesInfo} = props;
  
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
    )
}

export default Cities;