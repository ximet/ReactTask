import React, { FC, HTMLInputTypeAttribute, ChangeEvent, InputHTMLAttributes } from 'react';
import { makeRequiredLabel } from 'utils/stringCorrections';
import { checkIfTypeIsTextArea } from 'utils/inputTypeCheck';
import styles from './input.module.scss';

type InputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type: HTMLInputTypeAttribute;
};

const Input: FC<InputHTMLAttributes<HTMLInputElement> & InputProps> = ({
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
      {checkIfTypeIsTextArea(type) ? (
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
