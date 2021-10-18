import classes from './Preloader.module.scss';

function Preloader() {
  return (
    <div className={classes.preloaderContainer}>
      <div className={classes.preloader}></div>
    </div>
  );
}

export default Preloader;
