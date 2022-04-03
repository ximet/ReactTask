import React from 'react';
import classes from './Loader.module.css';

function Loader() {
  return (
    <div className={classes.loader_wrapper}>
      <div className={classes.loader} />
      <span className={classes.loader_text}>Loading...</span>
    </div>
  )
}

export default Loader;
