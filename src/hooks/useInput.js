import { useState } from 'react';
import { useValidation } from './useValidation';

const ERROR_MESSAGES = {
    isEmpty: 'This field is required',
    minLength: 'Incorrect length',
    maxLength: 'Incorrect length',
    email: 'Incorrect email'
};

export function useInput(initialValue, validators) {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
  
    const valid = useValidation(value, validators);
    const errorMessages = createErrorMessages(valid.errors, isDirty);
  
    valid.errors = errorMessages;
  
    function onChange(event) {
      const value = event.target.value;
  
      setValue(value);
    }
  
    function onBlur(event) {
      setIsDirty(true);
    }
  
    return { value, onChange, onBlur, ...valid };
}

function createErrorMessages(errors, isDirty) {
    const errorMessages = [];
  
    for (const error in errors) {
      if (isDirty && errors[error]) errorMessages.push(ERROR_MESSAGES[error]);
    }
  
    return errorMessages;
}