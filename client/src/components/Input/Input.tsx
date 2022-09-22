import React, { FC, ReactNode } from 'react';
import { makeRequiredLabel } from 'utils/stringCorrections';
import styles from './input.module.scss';

type InputProps = {
  label?: string | ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  checked?: boolean;
};

const Input: FC<React.InputHTMLAttributes<HTMLInputElement> & InputProps> = ({
  type,
  name,
  id,
  value,
  onChange,
  label,
  checked
}) => {
  return (
    <div className={styles.userRegisterFormGroup}>
      <label htmlFor={id}>
        {type === 'textarea' ? (
          <textarea name={name} id={id} value={value} onChange={onChange} />
        ) : (
          <input type={type} name={name} id={id} value={value} onChange={onChange} />
        )}
        {!label ? makeRequiredLabel(name) : label}
      </label>
    </div>
  );
};

export default Input;
