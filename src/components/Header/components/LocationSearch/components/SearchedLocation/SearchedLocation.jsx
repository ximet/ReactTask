import classes from './SearchedLocation.module.scss';

function SearchedLocation({ location }) {
  return (
    <li className={classes.locationItem} key={location.id}>
      <a className={classes.locationItemLink} href="#">
        <div className={classes.locationName}>{location.name}</div>
        <div className={classes.locationArea}>{`${location.adminArea} / ${location.country}`}</div>
      </a>
    </li>
  );
}

export default SearchedLocation;
