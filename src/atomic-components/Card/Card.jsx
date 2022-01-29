import React from 'react';
import classes from './Card.module.css';

function Card() {
  return (
    <div className={classes.card}>
      <div className={classes.card_item}>
        <div className={classes.card_info}>
          <h5 className={classes.card_text}>Current weather</h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
