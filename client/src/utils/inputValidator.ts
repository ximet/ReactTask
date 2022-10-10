import type { InputValidation, InputValidator } from 'types';

import { VALIDATOR, VALIDATION_ERRORS } from '../constants';

const inputValidator = (
  inputValue: string,
  inputName: string,
  validation: Partial<InputValidation>
): { valid: boolean; errMsg: string } => {
  if (validation) {
    const validators = Object.entries(validation);

    const result = validators.reduce(
      ({ validatedList, errMsg }, [ruleName, ruleValue]) => {
        const validated = VALIDATOR[ruleName as InputValidator](inputValue?.trim(), ruleValue);
        const validationErr = VALIDATION_ERRORS[ruleName as InputValidator](inputName, ruleValue);

        return {
          validatedList: [...validatedList, validated],
          errMsg: `${errMsg} ${!validated ? validationErr : ''}`
        };
      },
      { validatedList: [], errMsg: '' } as { validatedList: boolean[]; errMsg: string }
    );

    return { ...result, valid: !result.validatedList.includes(false) };
  }

  return { valid: true, errMsg: '' };
};

export default inputValidator;
