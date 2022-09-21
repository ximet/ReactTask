import React, { FC, ReactNode } from 'react';
import styles from './input.module.scss';

type InputProps = {
  type: string;
  name: string;
  id: string;
  label: string | ReactNode;
  value: string | number | readonly string[] | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  checked?: boolean;
};
const Input: FC<InputProps> = ({ type, name, id, value, onChange, label, checked }) => {
  return (
    <div className={styles.userRegisterFormGroup}>
      <label htmlFor={id}>
        {type === 'textarea' ? (
          <textarea name={name} id={id} value={value} onChange={onChange} />
        ) : (
          <input
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            //   data-validators="required, string, min-length(7), max-length(15)"
          />
        )}
        {label}
      </label>
    </div>
  );
};

export default Input;
