import { useState } from 'react';

const validationSchema: { [index: string]: (value: string) => boolean } = {
  name: (value: string) => /[a-zA-Z0-9_]{3,}/gm.test(value),
  email: (value: string) =>
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(
      value
    )
};

export default function useValidate() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const validateInput = (element: HTMLInputElement, value: string) => {
    setIsValid(validationSchema[element.name](value));
  };

  return {
    isValid,
    validateInput
  };
}
