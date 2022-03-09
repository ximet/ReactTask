import React from 'react';
import classes from './Image.module.css';

function Image({ image }) {
  return (
    <div className={classes.container}>
      <img src={image} alt="" className={classes.image_container} />
    </div>
  );
}

export default Image;
