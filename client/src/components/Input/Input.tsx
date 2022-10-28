import React, {
  FC,
  HTMLInputTypeAttribute,
  ChangeEvent,
  InputHTMLAttributes,
  useContext
} from 'react';
import { makeRequiredLabel } from 'utils/stringCorrections';
import { checkIfTypeIsTextArea } from 'utils/inputTypeCheck';
import DarkLightThemeContext from 'contexts/ThemeContext';
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
  const { darkMode } = useContext(DarkLightThemeContext);

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
          className={`${styles.textarea} ${darkMode ? styles.dark : styles.light}`}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onChange}
          className={`${styles.input} ${darkMode ? styles.dark : styles.light}`}
        />
      )}
    </div>
  );
};

export default Input;
