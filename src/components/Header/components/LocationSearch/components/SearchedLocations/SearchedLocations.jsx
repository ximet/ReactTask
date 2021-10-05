import classes from './SearchedLocations.module.scss';
import SearchedLocation from '../SearchedLocation/SearchedLocation';

function SearchedLocations({ locations, searchString, ...props }) {
  const setLocation = location => setChangeLocation(location);
  const onChangeLocation = location => props.onChangeLocation(location);

  return (
    <ul className={classes.searchedLocationsContainer}>
      {locations.map(item => (
        <SearchedLocation
          key={item.id}
          setLocation={setLocation}
          onChangeLocation={onChangeLocation}
          location={item}
        />
      ))}
    </ul>
  );
}

export default SearchedLocations;
