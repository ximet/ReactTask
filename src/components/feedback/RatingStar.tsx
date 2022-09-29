import React, { FC, ChangeEvent } from 'react';
import { IoMdStarOutline, IoMdStar } from 'react-icons/io';
import styles from './Feedback.css';

type RatingStarProps = {
  currentRating: number;
  ratingValue: number;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const RatingStar: FC<RatingStarProps> = ({ onChange, ratingValue, currentRating }) => {
  return (
    <>
      <input
        type="radio"
        name="rating"
        id={`rating${ratingValue}`}
        value={ratingValue}
        onChange={onChange}
        className={styles['rating-input']}
      />
      <label htmlFor={`rating${ratingValue}`} className={styles['rating-label']}>
        {currentRating >= ratingValue ? <IoMdStar size={30} /> : <IoMdStarOutline size={30} />}
      </label>
    </>
  );
};
