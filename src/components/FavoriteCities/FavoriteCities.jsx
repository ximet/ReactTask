// @flow
import classes from './FavoriteCities.module.scss';
import * as React from 'react';
import FavoriteCityForecast from './FavoriteCityForecast/FavoriteCityForecast';
import { connect } from 'react-redux';
import EmptyListMessage from '../EmptyListMessage/EmptyListMessage';
import type { FavoriteCitiesPropsType } from './FavoriteCitiesPropsType';

const makeFavoriteCitiesList = favoriteCities =>
  favoriteCities.map(location => (
    <FavoriteCityForecast key={`fav_${location.id}`} location={location} />
  ));

function FavoriteCities({ favoriteCitiesList }: FavoriteCitiesPropsType): React$Node {
  return (
    <div className={classes.favoriteContainer}>
      <h2 className={classes.title}>Favorite cities</h2>
      <div>
        {favoriteCitiesList.length ? (
          makeFavoriteCitiesList(favoriteCitiesList)
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
