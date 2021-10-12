import classes from './FavoriteCities.module.scss';
import FavoriteCityForecast from './FavoriteCityForecast/FavoriteCityForecast';
import mockFavoriteCities from './mockData';
import { v4 as uuidv4 } from 'uuid';

function FavoriteCities() {
  console.log(mockFavoriteCities);
  return (
    <div className={classes.favoriteContainer}>
      <h2 className={classes.title}>Favorite cities</h2>
      <div>
        {mockFavoriteCities.map(location => (
          <FavoriteCityForecast key={`fav_${location.id}`} location={location} />
        ))}
      </div>
    </div>
  );
}

export default FavoriteCities;
