import type { InputValidation } from 'types';

import { VALIDATOR, VALIDATION_ERRORS } from '../constants';

const inputValidator = (inputValue: string, inputName: string, validation?: InputValidation) => {
  const value = inputValue.trim();

  let isValid = true;
  let message = '';

  if (validation) {
    const validators = Object.entries(validation);

    isValid = !validators
      .map(validator => {
        const valid = VALIDATOR[validator[0]](value, validator[1]);

        const err = valid ? '' : VALIDATION_ERRORS[validator[0]](inputName, validator[1]);

        message += ` ${err}`;

        return valid;
      })
      .includes(false);
  }

  return { isValid, message };
};

export default inputValidator;
