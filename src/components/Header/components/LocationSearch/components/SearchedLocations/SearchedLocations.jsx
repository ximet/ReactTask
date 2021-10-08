// @flow
import classes from './SearchedLocations.module.scss';
import SearchedLocation from '../SearchedLocation/SearchedLocation';
import type { SearchedLocationsPropsType } from './SearchedLocationsPropsType';

function SearchedLocations({ locations, ...props }: SearchedLocationsPropsType): React$Node {
  const onChangeLocation = location => props.onChangeLocation(location);

  return (
    <ul className={classes.searchedLocationsContainer}>
      {locations.map(item => (
        <SearchedLocation key={item.id} onChangeLocation={onChangeLocation} location={item} />
      ))}
    </ul>
  );
}

export default SearchedLocations;
