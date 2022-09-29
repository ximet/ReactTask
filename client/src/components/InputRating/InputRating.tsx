import React, { ChangeEvent, FC, InputHTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { makeRequiredLabel } from 'utils/stringCorrections';
import { checkIfTypeIsNotHidden } from 'utils/inputTypeCheck';
import styles from './InputRating.module.scss';

type InputRatingProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: number;
  type: HTMLInputTypeAttribute;
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
      className={checkIfTypeIsNotHidden(type) ? styles.ratingContainer : styles.ratingContainerMsg}
    >
      {checkIfTypeIsNotHidden(type) && (
        <div className={styles.textContainer}>
          <h3>{makeRequiredLabel(name)} </h3>
          <div>Fields marked with a * are required.</div>
        </div>
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
                  value={checkIfTypeIsNotHidden(type) ? ratingNumber : value}
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
