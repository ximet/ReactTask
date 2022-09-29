import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import styles from './InputRating.module.scss';

const INPUT_TYPE_HIDDEN = 'hidden';

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
    <div
      className={type !== INPUT_TYPE_HIDDEN ? styles.ratingContainer : styles.ratingContainerMsg}
    >
      {type !== INPUT_TYPE_HIDDEN ? (
        <div className={styles.textContainer}>
          <h3>* Rating</h3>
          <div>Fields marked with a * are required.</div>
        </div>
      ) : (
        ''
      )}
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
                  value={type !== INPUT_TYPE_HIDDEN ? ratingNumber : value}
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
