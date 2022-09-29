import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import styles from './InputRating.module.scss';

type InputRatingProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: number;
};

const InputRating: FC<InputHTMLAttributes<HTMLInputElement> & InputRatingProps> = ({
  type,
  name,
  id,
  value,
  onChange
}) => {
  return (
    <div className={type !== 'hidden' ? styles.ratingContainer : styles.ratingContainerMsg}>
      <div className={styles.textContainer}>
        <h3>{type !== 'hidden' ? '* Rating' : ''}</h3>
        <div>{type !== 'hidden' && 'Fields marked with a * are required.'}</div>
      </div>
      <div className={styles.starsContainer}>
        {Array.from({ length: 5 }, (_, i) => {
          const ratingNumber = i + 1;
          return (
            <div key={`rating-${ratingNumber}`}>
              <label htmlFor={`${id}${ratingNumber}`} className={styles.ratingLabel}>
                <input
                  type={type}
                  name={name}
                  id={`${id}${ratingNumber}`}
                  value={type !== 'hidden' ? ratingNumber : value}
                  onChange={onChange}
                  className={styles.ratingInput}
                />
                {value > i ? <BsStarFill /> : <BsStar />}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputRating;
