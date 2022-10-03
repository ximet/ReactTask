import { ERRORS } from '../constants/errors';
import { VALIDATORS_STRINGS } from '../constants/validatorStrings';
import { VALIDATOR } from '../constants/validator';

interface ValidatorsArray {
  valName: string;
  param: string;
}

export const isInputValid = (name: string, value: string | number): string => {
  const inputMessage: string[] = [];
  const inputValidators = VALIDATORS_STRINGS[name];
  inputValidators.forEach((validator: ValidatorsArray): void => {
    if (VALIDATOR[validator.valName](value, validator.param)) {
      inputMessage.push(ERRORS[validator.valName](name, validator.param));
    }
  });
  const formatedInputMessage = inputMessage.join(' ');
  return formatedInputMessage;
};
