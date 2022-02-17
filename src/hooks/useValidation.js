import { useEffect, useState } from 'react';

const EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const VALIDATORS = {
  isEmpty: value => !!(value.length === 0),
  minLength: (value, param) => !!(value.length < param),
  maxLength: (value, param) => !!(value.length > param),
  email: value => !EMAIL_REGEXP.test(value)
};

export function useValidation(value, validators) {
    const [errors, setErrors] = useState({
      isEmpty: false,
      minLength: false,
      email: false,
      maxLength: false
    });
    const [isInputValid, setIsInputValid] = useState(false);
  
    useEffect(() => {
      for (const validator in validators) {
        const isError = VALIDATORS[validator](value, validators[validator]);
        setErrors(prev => ({ ...prev, [validator]: isError }));
      }
    }, [value]);
  
    useEffect(() => {
      setIsInputValid(true);
  
      for (const error in errors) {
        if (errors[error]) {
          setIsInputValid(false);
          break;
        }
      }
    }, [errors]);
  
    return { errors, isInputValid };
}
