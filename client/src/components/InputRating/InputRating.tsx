import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

type InputRatingProps = {
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
    <div className="rating">
      {Array.from({ length: 5 }, (_, i) => {
        const ratingNumber = i + 1;
        return (
          <div key={`rating-${ratingNumber}`}>
            <label htmlFor={`${id}${ratingNumber}`}>
              <input
                type={type}
                name={name}
                id={`${id}${ratingNumber}`}
                value={type !== 'hidden' ? ratingNumber : value}
                onChange={onChange}
                checked={value === ratingNumber}
              />
              {value > i ? <BsStarFill /> : <BsStar />}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default InputRating;
