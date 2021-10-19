// @flow
import * as React from 'react';
import classes from './SearchedLocation.module.scss';
import type {
  SearchedLocationPropsType,
  SearchedLocationOwnPropsType
} from './SearchedLocationPropsType';
import { connect } from 'react-redux';
import {
  setCurrentLocation,
  setFavoriteCities
} from '../../../../../../actions/locationsManagerActions';
import { selectFavoriteCitiesId } from '../../../../../../selectors/selectorsFavorite';
import { ReactComponent as HeartIcon } from '../../../../../../assets/img/svg/icon-heart.svg';

const SearchedLocation = ({
  location,
  setFavoriteCities,
  favoriteCitiesIdList,
  ...props
}: SearchedLocationPropsType): React$Node => {
  const [isFavorite, setIsFavorite] = React.useState(() => {
    return favoriteCitiesIdList.indexOf(location.id) !== -1;
  });

  const handleToggleFavorite = event => {
    setIsFavorite(isFavorite => {
      setFavoriteCities(location, !isFavorite);
      return !isFavorite;
    });

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <li onClick={() => props.setCurrentLocation(location)} className={classes.locationItem}>
      <a className={classes.locationItemLink} href="#">
        <div className={classes.locationName}>{location.name}</div>
        <div className={classes.locationArea}>{`${location.adminArea} / ${location.country}`}</div>
      </a>
      <a
        href="#"
        className={[classes.favoriteBtn, isFavorite && classes.active].join(' ')}
        onClick={handleToggleFavorite}
      >
        <HeartIcon />
      </a>
    </li>
  );
};

const mapStateToProps = ({ locationManager: { favoriteCitiesList } }) => ({
  favoriteCitiesIdList: selectFavoriteCitiesId(favoriteCitiesList)
});

const mapDispatchToProps = dispatch => {
  return {
    setCurrentLocation: location => dispatch(setCurrentLocation(location)),
    setFavoriteCities: (location, isFavorite) => dispatch(setFavoriteCities(location, isFavorite))
  };
};

const WrappedSearchedLocation = (connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchedLocation): React.AbstractComponent<SearchedLocationOwnPropsType>);

export default WrappedSearchedLocation;
