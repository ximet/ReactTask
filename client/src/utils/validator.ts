import { ERRORS } from '../constants/errors';
import { VALIDATORS_STRINGS } from '../constants/validatorStrings';
import { VALIDATOR } from '../constants/validator';

interface validatorsArray {
  valName: string;
  param: string;
}
const createInputValidators = (name: string) => {
  const validatorsNew: validatorsArray[] = [];
  VALIDATORS_STRINGS[name].map((validator: string) => {
    const separator: string | undefined = '(';
    const valName: string = validator.split(separator)[0];
    const regExp = /[()]/;
    const param: string = validator.split(regExp)[1];
    validatorsNew.push({
      valName,
      param
    });
    return null;
  });
  return validatorsNew;
};

export const isInputValid = (name: string, value: string | number): string => {
  const inputMessage: string[] = [];
  const inputValidators = createInputValidators(name);
  if (inputValidators) {
    inputValidators.forEach(validator => {
      if (VALIDATOR[validator.valName](value, validator.param)) {
        inputMessage.push(ERRORS[validator.valName](name, validator.param));
      }
    });
  }
  const formatedInputMessage = inputMessage.join(' ');
  return formatedInputMessage;
};
