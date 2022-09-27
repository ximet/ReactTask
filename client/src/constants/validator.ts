import { validateEmail, validateName } from 'utils/validateRegex';

export const VALIDATOR = {
  required: (value: string) => {
    return !!(value.length === 0);
  },
  'required-rating': value => {
    return !!(+value === 0);
  },
  string: (value: string) => {
    return !validateName.test(value);
  },
  'min-length': (value: string, param: number) => {
    return !!(value.length < param);
  },
  'max-length': (value: string, param: number) => {
    return !!(value.length > param);
  },
  'validate-email': (value: string) => {
    return !validateEmail.test(value);
  }
};
