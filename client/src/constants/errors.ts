import { Errors } from 'types';
import { capitalizeFirstLetter } from 'utils/stringCorrections';
import { Validations } from './validatorStrings';

export const ERRORS: Errors = {
  [Validations.REQUIRED]: (field: string) => {
    return `This ${capitalizeFirstLetter(field)} field is required!`;
  },
  [Validations.REQUIRED_RATING]: (field: string) => {
    return `This ${capitalizeFirstLetter(field)} field is required!`;
  },
  [Validations.STRING]: (field: string) => {
    return `This ${capitalizeFirstLetter(field)} field must consist of letters.`;
  },
  [Validations.MIN_LENGTH]: (field: string, param: number) => {
    return `${capitalizeFirstLetter(field)} min-length is ${param} letters.`;
  },
  [Validations.MAX_LENGTH]: (field: string, param: number) => {
    return ` ${capitalizeFirstLetter(field)} max-length is ${param} letters.`;
  },
  [Validations.VALIDATE_EMAIL]: () => {
    return 'Email must be a valid email!';
  }
};
