// @flow
import classes from './FavoriteCities.module.scss';
import * as React from 'react';
import { connect } from 'react-redux';
import FavoriteCityForecast from './FavoriteCityForecast/FavoriteCityForecast';
import EmptyListMessage from '../EmptyListMessage/EmptyListMessage';
import type { FavoriteCitiesPropsType } from './FavoriteCitiesPropsType';

function FavoriteCities({ favoriteCitiesList }: FavoriteCitiesPropsType): React$Node {
  return (
    <div className={classes.favoriteContainer}>
      <h2 className={classes.title}>Favorite cities</h2>
      <div>
        {favoriteCitiesList.length ? (
          favoriteCitiesList.map(location => (
            <FavoriteCityForecast key={`fav_${location.id}`} location={location} />
          ))
        ) : (
          <EmptyListMessage
            title="Favorite cities list is empty"
            message="You acn complete this list."
          />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ locationManager: { favoriteCitiesList } }) => {
  return {
    favoriteCitiesList
  };
};

const WrappedFavoriteCities = (connect(mapStateToProps)(
  FavoriteCities
): React.AbstractComponent<{}>);

export default WrappedFavoriteCities;
