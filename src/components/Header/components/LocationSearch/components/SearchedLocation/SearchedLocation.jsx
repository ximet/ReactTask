// @flow
import * as React from 'react';
import classes from './SearchedLocation.module.scss';
import type {
  SearchedLocationPropsType,
  SearchedLocationOwnPropsType
} from './SearchedLocationPropsType';
import { connect } from 'react-redux';
import { changeLocation } from '../../../../../../actions/locationsManagerActions';

const SearchedLocation = ({ location, ...props }: SearchedLocationPropsType): React$Node => {
  return (
    <li onClick={() => props.onChangeLocation(location)} className={classes.locationItem}>
      <a className={classes.locationItemLink} href="#">
        <div className={classes.locationName}>{location.name}</div>
        <div className={classes.locationArea}>{`${location.adminArea} / ${location.country}`}</div>
      </a>
    </li>
  );
};

const mapStateToProps = ({ locationManager: { currentLocation } }) => ({
  currentLocation
});

const mapDispatchToProps = dispatch => {
  return {
    onChangeLocation: location => dispatch(changeLocation(location))
  };
};

const WrappedSearchedLocation = (connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchedLocation): React.AbstractComponent<SearchedLocationOwnPropsType>);

export default WrappedSearchedLocation;
