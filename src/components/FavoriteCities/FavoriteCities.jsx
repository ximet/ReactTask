// @flow
import classes from './FavoriteCities.module.scss';
import * as React from 'react';
import { connect } from 'react-redux';
import FavoriteCityForecast from './FavoriteCityForecast/FavoriteCityForecast';
import { selectorGetLocationForecast } from '../../selectors/selectorsForecast';
import type { FavoriteCitiesPropsType } from './FavoriteCitiesPropsType';

function FavoriteCities({ favoriteLocations }: FavoriteCitiesPropsType): React.Node {
  return (
    <div className={classes.favoriteContainer}>
      <h2 className={classes.title}>Favorite cities</h2>
      <div>
        {favoriteLocations.map(location => (
          <FavoriteCityForecast key={`fav_${location.id}`} location={location} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    favoriteLocations: selectorGetLocationForecast(state)
  };
};

const WrappedFavoriteCities = (connect(mapStateToProps)(
  FavoriteCities
): React.AbstractComponent<FavoriteCitiesPropsType>);

export default WrappedFavoriteCities;
