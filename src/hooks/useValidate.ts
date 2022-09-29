import { useState } from 'react';

export type ValidateElementInfoType = {
  isValid: { [index: string]: boolean };
  validateInput: (elementName: string, value: string) => void;
};

const REG_EXP_FOR_NAME = /[a-zA-Z0-9_]/iu;
const REG_EXP_FOR_EMAIL = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const REG_EXP_FOR_PHONE = /\d{7,}/iu;

const validationSchema: { [index: string]: (value: string) => boolean } = {
  minLength: (value: string) => value.length >= 4,
  name: (value: string) => REG_EXP_FOR_NAME.test(value),
  email: (value: string) => REG_EXP_FOR_EMAIL.test(value),
  phone: (value: string) => REG_EXP_FOR_PHONE.test(value)
};

export default function useValidate(settings: {
  [index: string]: string;
}): ValidateElementInfoType {
  const [isValid, setIsValid] = useState<{ [index: string]: boolean }>({
    email: false,
    name: false,
    phone: false
  });

  const validateInput = (elementName: string, value: string) => {
    const rules = settings[elementName].split(',');

    const isValidRules: boolean[] = [];

    for (let rule of rules) {
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
