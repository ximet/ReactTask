import { useState } from 'react';

export type ValidateElementInfoType = {
  isValid: boolean;
  validateInput: (elementName: string, value: string) => void;
};

const REG_EXP_FOR_NAME = /[a-zA-Z0-9_]{3,}/iu;
const REG_EXP_FOR_EMAIL = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const validationSchema: { [index: string]: (value: string) => boolean } = {
  name: (value: string) => REG_EXP_FOR_NAME.test(value),
  email: (value: string) => REG_EXP_FOR_EMAIL.test(value)
};

export default function useValidate(): ValidateElementInfoType {
  const [isValid, setIsValid] = useState<boolean>(false);
  const validateInput = (elementName: string, value: string) => {
    setIsValid(validationSchema[elementName](value));
  };

  return {
    isValid,
    validateInput
  };
}
