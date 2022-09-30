import { useState } from 'react';
import { ValidationFunctions } from 'enums/validationFunctionsEnum';

export type ValidateElementInfoType = {
  isValid: IsValidState;
  validateInput: (elementName: string, value: string) => void;
};

interface IsValidState {
  email: boolean;
  name: boolean;
  phone: boolean;
}

const REG_EXP_FOR_NAME = /[a-zA-Z0-9_]/iu;
const REG_EXP_FOR_EMAIL = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const REG_EXP_FOR_PHONE = /\d{7,}/iu;

const validationSchema: { [index: string]: (value: string) => boolean } = {
  [ValidationFunctions.MIN_LENGTH]: (value: string) => value.length >= 4,
  [ValidationFunctions.NAME]: (value: string) => REG_EXP_FOR_NAME.test(value),
  [ValidationFunctions.EMAIL]: (value: string) => REG_EXP_FOR_EMAIL.test(value),
  [ValidationFunctions.PHONE]: (value: string) => REG_EXP_FOR_PHONE.test(value)
};

export default function useValidate(settings: {
  [index: string]: string[];
}): ValidateElementInfoType {
  const [isValid, setIsValid] = useState<IsValidState>({
    email: false,
    name: false,
    phone: false
  });

  const validateInput = (elementName: string, value: string) => {
    const isValidRules: boolean[] = [];

    for (let rule of settings[elementName]) {
      isValidRules.push(validationSchema[rule](value));
    }

    const isValidInput = isValidRules.every(isValidRule => isValidRule);
    setIsValid(prevState => ({
      ...prevState,
      [elementName]: isValidInput
    }));
  };

  return {
    isValid,
    validateInput
  };
}
