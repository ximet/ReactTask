import { validateEmail, validateName } from 'utils/validateRegex';

export const VALIDATOR = {
  required: (value: string) => {
    return !!(value.length === 0);
  },
  requiredRating: value => {
    return !!(+value === 0);
  },
  string: (value: string) => {
    return !validateName.test(value);
  },
  minLength: (value: string, param: number) => {
    return !!(value.length < param);
  },
  maxLength: (value: string, param: number) => {
    return !!(value.length > param);
  },
  validateEmail: (value: string) => {
    return !validateEmail.test(value);
  }
};
