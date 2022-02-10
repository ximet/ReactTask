import React from 'react';
import classes from './Card.module.css';

function Card(props) {
  const { children } = props;

  return (
    <div className={classes.card}>
      <div className={classes.card_container}>
        <div className={classes.card_item}>
          <div className={classes.card_info}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
