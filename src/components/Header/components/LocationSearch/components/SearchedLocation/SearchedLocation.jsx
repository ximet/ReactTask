// @flow

import classes from './SearchedLocation.module.scss';
import type { SearchedLocationPropsType } from './SearchedLocationPropsType';

const SearchedLocation = ({ location, ...props }: SearchedLocationPropsType): React$Node => {
  const onChangeLocation = event => props.onChangeLocation(location);

  return (
    <li onClick={onChangeLocation} className={classes.locationItem}>
      <a className={classes.locationItemLink} href="#">
        <div className={classes.locationName}>{location.name}</div>
        <div className={classes.locationArea}>{`${location.adminArea} / ${location.country}`}</div>
      </a>
    </li>
  );
};

export default SearchedLocation;
