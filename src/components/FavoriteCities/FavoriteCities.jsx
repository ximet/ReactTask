import classes from './FavoriteCities.module.scss';

import FavoriteCityForecast from './FavoriteCityForecast/FavoriteCityForecast';

function FavoriteCities() {
  return (
    <div className={classes.favoriteContainer}>
      <h2 className={classes.title}>Favorite cities</h2>
      <div>
        <FavoriteCityForecast cityName="Gomel" />
        <FavoriteCityForecast cityName="Minsk" />
        <FavoriteCityForecast cityName="Moskow" />
      </div>
    </div>
  );
}

export default FavoriteCities;
