import React, { FC, ChangeEvent } from 'react';
import { IoMdStarOutline, IoMdStar } from 'react-icons/io';
import styles from './Feedback.css';

type RatingStarProps = {
  currentRating: number;
  ratingValue: number;
  className: string;
  size?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const RatingStar: FC<RatingStarProps> = ({
  onChange,
  ratingValue,
  currentRating,
  className,
  size
}) => {
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
      <label htmlFor={`rating${ratingValue}`} className={className}>
        {currentRating >= ratingValue ? <IoMdStar size={size} /> : <IoMdStarOutline size={size} />}
      </label>
    </>
  );
};