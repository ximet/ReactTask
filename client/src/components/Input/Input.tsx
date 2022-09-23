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
    <div className={styles.userRegisterFormGroup}>
      <label htmlFor={id}>
        {type === 'textarea' ? (
          <textarea name={name} id={id} value={value} onChange={onChange} />
        ) : (
          <input type={type} name={name} id={id} value={value} onChange={onChange} />
        )}
        {makeRequiredLabel(name)}
      </label>
    </div>
  );
};

export default Input;
