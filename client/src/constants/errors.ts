import { capitalizeFirstLetter } from 'utils/stringCorrections';

export const ERRORS = {
  required: (field: string) => {
    return `This ${capitalizeFirstLetter(field)} field is required!`;
  },
  requiredRating: (field: string) => {
    return `This ${capitalizeFirstLetter(field)} field is required!`;
  },
  string: (field: string) => {
    return `This ${capitalizeFirstLetter(field)} field must consist of letters.`;
  },
  minLength: (field: string, param: string) => {
    return `${capitalizeFirstLetter(field)} min-length is ${param} letters.`;
  },
  maxLength: (field: string, param: string) => {
    return ` ${capitalizeFirstLetter(field)} max-length is ${param} letters.`;
  },
  validateEmail: () => {
    return 'Email must be a valid email!';
  }
};
