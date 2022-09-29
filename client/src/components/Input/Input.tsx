import React, { FC } from 'react';
import { makeRequiredLabel } from 'utils/stringCorrections';
import styles from './input.module.scss';

type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const Input: FC<React.InputHTMLAttributes<HTMLInputElement> & InputProps> = ({
  type,
  name,
  id,
  value,
  onChange
}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.ratingLabel}>
        {makeRequiredLabel(name)}
      </label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onChange}
          className={styles.textarea}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onChange}
          className={styles.input}
        />
      )}
    </div>
  );
};

export default Input;
