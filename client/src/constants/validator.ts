import { validateEmail, validateName } from 'utils/validateRegex';
import { Validations } from './validatorStrings';

export const VALIDATOR = {
  [Validations.REQUIRED]: (value: string) => {
    return !value.length;
  },
  [Validations.REQUIRED_RATING]: (value: string) => {
    return !+value;
  },
  [Validations.STRING]: (value: string) => {
    return !validateName.test(value);
  },
  [Validations.MIN_LENGTH]: (value: string, param: number) => {
    return value.length < param;
  },
  [Validations.MAX_LENGTH]: (value: string, param: number) => {
    return value.length > param;
  },
  [Validations.VALIDATE_EMAIL]: (value: string) => {
    return !validateEmail.test(value);
  }
};
