import React from 'react';
import starBlack from '../../../public/images/starBlack.png';
import starYellow from '../../../public/images/starYellow.png';
import classes from './Star.module.css';

function Star({ filled, onClick }) {
  return (
    <button type="button" className={classes.star_button} onClick={onClick}>
      <img alt="starIcon" src={filled ? starYellow : starBlack} />
    </button>
  );
}

export default Star;
