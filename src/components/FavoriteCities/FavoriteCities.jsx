// @flow
import classes from './FavoriteCities.module.scss';
import * as React from 'react';
import FavoriteCityForecast from './FavoriteCityForecast/FavoriteCityForecast';
import mockFavoriteCities from './mockData';

function FavoriteCities(): React.Node {
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
