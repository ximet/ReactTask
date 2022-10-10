import type { InputValidation, InputValidator } from 'types';

import { VALIDATOR, VALIDATION_ERRORS } from '../constants';

type ValidatorResult = { validatedList: boolean[]; errMsg: string[] };

const inputValidator = (
  inputValue: string,
  inputName: string,
  validation: Partial<InputValidation>
): { valid: boolean; errMsg: string } => {
  if (validation) {
    const validators = Object.entries(validation);

    const result = validators.reduce<ValidatorResult>(
      ({ validatedList, errMsg }, [ruleName, ruleValue]): ValidatorResult => {
        const validated = VALIDATOR[ruleName as InputValidator](inputValue?.trim(), ruleValue);
        const validationErr = VALIDATION_ERRORS[ruleName as InputValidator](inputName, ruleValue);

        return {
          validatedList: [...validatedList, validated],
          errMsg: [...errMsg, !validated ? validationErr : '']
        };
      },
      { validatedList: [], errMsg: [] }
    );

    return {
      valid: !result.validatedList.includes(false),
      errMsg: result.errMsg.join(' ')
    };
  }

  return { valid: true, errMsg: '' };
};

export default inputValidator;
