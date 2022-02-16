import React from 'react';
import Star from '../../atomic-components/Star/Star';
import classes from './StarRating.module.css';

function StarRating({ setRating, value }) {
  return (
    <div className={classes.star_rating}>
      {[1, 2, 3, 4, 5].map(index => (
        <Star key={index} filled={index <= value} onClick={() => setRating(index)} />
      ))}
    </div>
  );
}

StarRating.defaultProps = {
  value: 0
};

export default StarRating;
