import classes from './LocationSearch.module.scss';

function LocationSearch() {
  return (
    <div className={classes.currentLocation}>
      <span className={classes.title}>current city:</span>
      <a className={classes.value} href="#">
        Gomel
      </a>
    </div>
  );
}

export default LocationSearch;
